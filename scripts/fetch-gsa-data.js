#!/usr/bin/env node

/**
 * GSA Per Diem Data Fetcher
 * 
 * Fetches current CONUS per diem rates from the GSA API
 * and outputs verified data for integration into the database.
 * 
 * API Docs: https://open.gsa.gov/api/perdiem/
 * 
 * Setup:
 * 1. Get API key from https://open.gsa.gov/api/perdiem/ (free, instant)
 * 2. Set environment variable: export GSA_API_KEY="your-key-here"
 * 3. Run: node fetch-gsa-data.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const API_KEY = process.env.GSA_API_KEY || '';
const FISCAL_YEAR = 2026; // Current FY (Oct 1, 2025 - Sep 30, 2026)
const BASE_URL = 'api.gsa.gov';

// Priority US cities for G7+G20 verification
const PRIORITY_CITIES = [
    { city: 'Washington', state: 'DC', name: 'Washington, DC' },
    { city: 'New York', state: 'NY', name: 'New York, NY' },
    { city: 'San Francisco', state: 'CA', name: 'San Francisco, CA' },
    { city: 'Los Angeles', state: 'CA', name: 'Los Angeles, CA' },
    { city: 'Chicago', state: 'IL', name: 'Chicago, IL' },
    { city: 'Boston', state: 'MA', name: 'Boston, MA' },
    { city: 'Seattle', state: 'WA', name: 'Seattle, WA' },
    { city: 'Miami', state: 'FL', name: 'Miami, FL' },
    { city: 'Atlanta', state: 'GA', name: 'Atlanta, GA' },
    { city: 'Dallas', state: 'TX', name: 'Dallas, TX' },
    { city: 'Houston', state: 'TX', name: 'Houston, TX' },
    { city: 'Phoenix', state: 'AZ', name: 'Phoenix, AZ' },
    { city: 'Philadelphia', state: 'PA', name: 'Philadelphia, PA' },
    { city: 'Denver', state: 'CO', name: 'Denver, CO' },
    { city: 'San Diego', state: 'CA', name: 'San Diego, CA' }
];

// ANSI colors for console output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    cyan: '\x1b[36m',
    gray: '\x1b[90m'
};

/**
 * Make HTTPS request to GSA API
 */
function makeRequest(endpoint) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: BASE_URL,
            path: endpoint,
            method: 'GET',
            headers: {
                'x-api-key': API_KEY
            }
        };

        const req = https.request(options, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        resolve(JSON.parse(data));
                    } catch (e) {
                        reject(new Error(`JSON parse error: ${e.message}`));
                    }
                } else if (res.statusCode === 403) {
                    reject(new Error('API key missing or invalid. Set GSA_API_KEY environment variable.'));
                } else {
                    reject(new Error(`API returned ${res.statusCode}: ${data}`));
                }
            });
        });

        req.on('error', (e) => {
            reject(e);
        });

        req.end();
    });
}

/**
 * Fetch standard CONUS rate
 */
async function getStandardRate() {
    console.log(`${colors.cyan}Fetching standard CONUS rate...${colors.reset}`);
    
    const data = await makeRequest(`/travel/perdiem/v2/rates/conus/lodging/${FISCAL_YEAR}`);
    
    // Find standard rate (DID = 0, City = "Standard Rate")
    const standardRate = data.find(item => item.DID === "0" && item.City === "Standard Rate");
    
    if (!standardRate) {
        throw new Error('Standard rate not found in API response');
    }
    
    return {
        city: "Standard Rate (CONUS)",
        country: "United States",
        region: "north-america",
        lodging: parseInt(standardRate.Jan), // All months are same for standard rate
        meals: parseInt(standardRate.Meals),
        total: parseInt(standardRate.Jan) + parseInt(standardRate.Meals),
        currency: "USD",
        source: "GSA",
        sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates",
        updated: `${FISCAL_YEAR}-10`, // FY starts October
        verifiedDate: new Date().toISOString().split('T')[0],
        fiscalYear: FISCAL_YEAR
    };
}

/**
 * Fetch per diem for a specific city
 */
async function getCityRate(city, state, displayName) {
    const encodedCity = encodeURIComponent(city);
    const endpoint = `/travel/perdiem/v2/rates/city/${encodedCity}/state/${state}/year/${FISCAL_YEAR}`;
    
    console.log(`${colors.gray}  Fetching ${displayName}...${colors.reset}`);
    
    try {
        const data = await makeRequest(endpoint);
        
        if (!data.rates || data.rates.length === 0) {
            console.log(`${colors.yellow}    Warning: No specific rate found, will use standard rate${colors.reset}`);
            return null;
        }
        
        const rate = data.rates[0].rate[0];
        
        // Use average of seasonal rates for simplicity
        // (In reality, rates vary by month)
        const months = rate.months.month;
        const avgLodging = Math.round(
            months.reduce((sum, m) => sum + m.value, 0) / months.length
        );
        
        return {
            city: displayName,
            country: "United States",
            region: "north-america",
            state: state,
            county: rate.county,
            lodging: avgLodging,
            meals: rate.meals,
            total: avgLodging + rate.meals,
            currency: "USD",
            source: "GSA",
            sourceUrl: `https://www.gsa.gov/travel/plan-book/per-diem-rates`,
            updated: `${FISCAL_YEAR}-10`,
            verifiedDate: new Date().toISOString().split('T')[0],
            fiscalYear: FISCAL_YEAR,
            seasonalRates: months.map(m => ({
                month: m.long,
                lodging: m.value
            }))
        };
    } catch (error) {
        console.log(`${colors.red}    Error: ${error.message}${colors.reset}`);
        return null;
    }
}

/**
 * Main execution
 */
async function main() {
    console.log(`${colors.cyan}============================================${colors.reset}`);
    console.log(`${colors.cyan}   GSA Per Diem Data Verification${colors.reset}`);
    console.log(`${colors.cyan}============================================${colors.reset}\n`);
    
    // Check API key
    if (!API_KEY) {
        console.error(`${colors.red}ERROR: GSA_API_KEY environment variable not set${colors.reset}\n`);
        console.log('To get an API key:');
        console.log('1. Visit https://open.gsa.gov/api/perdiem/');
        console.log('2. Fill out the signup form (instant approval)');
        console.log('3. Set environment variable: export GSA_API_KEY="your-key"');
        console.log('4. Re-run this script\n');
        process.exit(1);
    }
    
    console.log(`Fiscal Year: FY ${FISCAL_YEAR} (Oct 1, ${FISCAL_YEAR - 1} - Sep 30, ${FISCAL_YEAR})\n`);
    
    const verifiedEntries = [];
    
    try {
        // Fetch standard rate
        const standardRate = await getStandardRate();
        verifiedEntries.push(standardRate);
        console.log(`${colors.green}✓ Standard Rate: $${standardRate.total}/day (Lodging: $${standardRate.lodging}, M&IE: $${standardRate.meals})${colors.reset}\n`);
        
        // Fetch priority cities
        console.log(`${colors.cyan}Fetching priority cities:${colors.reset}`);
        for (const cityInfo of PRIORITY_CITIES) {
            const rate = await getCityRate(cityInfo.city, cityInfo.state, cityInfo.name);
            if (rate) {
                verifiedEntries.push(rate);
                console.log(`${colors.green}  ✓ ${rate.city}: $${rate.total}/day (Lodging: $${rate.lodging}, M&IE: $${rate.meals})${colors.reset}`);
            }
            
            // Rate limit: max 1000/hour, ~16/minute, be conservative
            await new Promise(resolve => setTimeout(resolve, 200));
        }
        
        console.log(`\n${colors.cyan}============================================${colors.reset}`);
        console.log(`${colors.green}✓ Successfully verified ${verifiedEntries.length} entries${colors.reset}`);
        console.log(`${colors.cyan}============================================${colors.reset}\n`);
        
        // Write output
        const outputDir = path.join(__dirname, '../verified-data');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        const outputFile = path.join(outputDir, `gsa-verified-${new Date().toISOString().split('T')[0]}.json`);
        fs.writeFileSync(outputFile, JSON.stringify(verifiedEntries, null, 2));
        
        console.log(`Output written to: ${outputFile}\n`);
        
        // Generate data.js entries
        console.log(`${colors.cyan}JavaScript entries for data.js:${colors.reset}\n`);
        verifiedEntries.forEach(entry => {
            console.log(`    { country: "${entry.country}", region: "${entry.region}", city: "${entry.city}", lodging: ${entry.lodging}, meals: ${entry.meals}, total: ${entry.total}, currency: "${entry.currency}", source: "${entry.source}", sourceUrl: "${entry.sourceUrl}", updated: "${entry.updated}" },`);
        });
        
    } catch (error) {
        console.error(`\n${colors.red}ERROR: ${error.message}${colors.reset}`);
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main().catch(error => {
        console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
        process.exit(1);
    });
}

module.exports = { makeRequest, getStandardRate, getCityRate };
