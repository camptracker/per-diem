#!/usr/bin/env node

/**
 * Fetch ALL GSA Per Diem Rates
 * 
 * Gets every US city with non-standard rates (300+ locations)
 * Plus standard CONUS rate
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = process.env.GSA_API_KEY || 'DEMO_KEY';
const FISCAL_YEAR = 2026;
const BASE_URL = 'api.gsa.gov';

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m'
};

function makeRequest(endpoint) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: BASE_URL,
            path: endpoint,
            method: 'GET',
            headers: { 'x-api-key': API_KEY }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => { data += chunk; });
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error(`JSON parse error: ${e.message}`));
                    }
                } else {
                    reject(new Error(`API returned ${res.statusCode}`));
                }
            });
        });

        req.on('error', (e) => { reject(e); });
        req.end();
    });
}

async function main() {
    console.log(`${colors.cyan}Fetching ALL GSA CONUS per diem rates...${colors.reset}\n`);
    
    try {
        // Fetch all lodging rates
        const data = await makeRequest(`/travel/perdiem/v2/rates/conus/lodging/${FISCAL_YEAR}`);
        
        console.log(`${colors.green}✓ Retrieved ${data.length} locations${colors.reset}\n`);
        
        const verifiedEntries = [];
        
        data.forEach(item => {
            // Calculate average lodging (some locations have seasonal rates)
            const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const lodgingValues = months.map(m => parseInt(item[m]));
            const avgLodging = Math.round(lodgingValues.reduce((a, b) => a + b, 0) / 12);
            const meals = parseInt(item.Meals);
            
            const cityName = item.State ? `${item.City}, ${item.State}` : item.City;
            
            verifiedEntries.push({
                country: "United States",
                region: "north-america",
                city: cityName,
                state: item.State || null,
                county: item.County || null,
                lodging: avgLodging,
                meals: meals,
                total: avgLodging + meals,
                currency: "USD",
                source: "GSA",
                sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates",
                updated: `${FISCAL_YEAR}-10`,
                verifiedDate: new Date().toISOString().split('T')[0],
                fiscalYear: FISCAL_YEAR
            });
        });
        
        // Write output
        const outputDir = path.join(__dirname, '../verified-data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        const outputFile = path.join(outputDir, `gsa-all-cities-${new Date().toISOString().split('T')[0]}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(verifiedEntries, null, 2));
        
        console.log(`${colors.green}✓ Verified ${verifiedEntries.length} US locations${colors.reset}`);
        console.log(`${colors.cyan}Output: ${outputFile}${colors.reset}\n`);
        
        // Summary stats
        const standardRate = verifiedEntries.find(e => e.city === "Standard Rate");
        const nonStandard = verifiedEntries.filter(e => e.city !== "Standard Rate");
        
        console.log(`${colors.cyan}Summary:${colors.reset}`);
        console.log(`  Standard Rate: $${standardRate.total}/day`);
        console.log(`  Non-Standard Areas: ${nonStandard.length}`);
        console.log(`  Rate Range: $${Math.min(...nonStandard.map(e => e.total))} - $${Math.max(...nonStandard.map(e => e.total))}/day`);
        
    } catch (error) {
        console.error(`${colors.yellow}ERROR: ${error.message}${colors.reset}`);
        process.exit(1);
    }
}

main();
