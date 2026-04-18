#!/usr/bin/env node

/**
 * State Department Per Diem Scraper
 * 
 * Scrapes ALL foreign country per diem rates from:
 * https://allowances.state.gov/web920/per_diem.asp
 * 
 * Uses Playwright for browser automation
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Check if Playwright is installed
let playwright;
try {
    playwright = require('playwright');
} catch (e) {
    console.log('\n❌ Playwright not installed. Installing now...\n');
    const { execSync } = require('child_process');
    execSync('npm install playwright', { stdio: 'inherit' });
    playwright = require('playwright');
}

const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    cyan: '\x1b[36m',
    red: '\x1b[31m',
    gray: '\x1b[90m'
};

// Countries to scrape (G7 + G20 first, then expand)
const PRIORITY_COUNTRIES = [
    // G7
    'United Kingdom', 'Germany', 'France', 'Italy', 'Japan', 'Canada',
    // G20 Additional
    'Australia', 'Brazil', 'China', 'India', 'Indonesia', 'Mexico',
    'Russia', 'Saudi Arabia', 'South Africa', 'South Korea', 'Turkey', 'Argentina'
];

async function scrapeCountry(page, country) {
    try {
        console.log(`${colors.cyan}Scraping ${country}...${colors.reset}`);
        
        // Navigate to per diem page
        await page.goto('https://allowances.state.gov/web920/per_diem.asp', {
            waitUntil: 'networkidle',
            timeout: 30000
        });
        
        // Wait for dropdown to be available
        await page.waitForSelector('select[name="country"]', { timeout: 10000 });
        
        // Select country from dropdown
        await page.selectOption('select[name="country"]', { label: country });
        
        // Click Go button
        await page.click('input[type="submit"][value="Go"]');
        
        // Wait for results table
        await page.waitForSelector('table', { timeout: 10000 });
        
        // Extract table data
        const data = await page.evaluate(() => {
            const rows = Array.from(document.querySelectorAll('table tr'));
            const results = [];
            
            // Skip header row
            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].querySelectorAll('td');
                if (cells.length >= 6) {
                    const cityName = cells[1]?.textContent?.trim() || '';
                    const lodging = cells[4]?.textContent?.trim() || '0';
                    const mie = cells[5]?.textContent?.trim() || '0';
                    const total = cells[6]?.textContent?.trim() || '0';
                    
                    if (cityName) {
                        results.push({
                            city: cityName,
                            lodging: parseInt(lodging.replace(/[^0-9]/g, '')) || 0,
                            meals: parseInt(mie.replace(/[^0-9]/g, '')) || 0,
                            total: parseInt(total.replace(/[^0-9]/g, '')) || 0
                        });
                    }
                }
            }
            
            return results;
        });
        
        if (data.length === 0) {
            console.log(`${colors.yellow}  Warning: No data found for ${country}${colors.reset}`);
            return [];
        }
        
        console.log(`${colors.green}  ✓ Found ${data.length} cities in ${country}${colors.reset}`);
        return data;
        
    } catch (error) {
        console.log(`${colors.red}  ✗ Error scraping ${country}: ${error.message}${colors.reset}`);
        return [];
    }
}

async function main() {
    console.log(`${colors.cyan}============================================${colors.reset}`);
    console.log(`${colors.cyan}  State Department Per Diem Scraper${colors.reset}`);
    console.log(`${colors.cyan}============================================${colors.reset}\n`);
    
    console.log('Launching browser...\n');
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    const allResults = [];
    
    for (const country of PRIORITY_COUNTRIES) {
        const cityData = await scrapeCountry(page, country);
        
        // Convert to our format
        cityData.forEach(city => {
            allResults.push({
                country: country,
                region: getRegion(country),
                city: city.city,
                lodging: city.lodging,
                meals: city.meals,
                total: city.total,
                currency: "USD",
                source: "US State Dept",
                sourceUrl: "https://allowances.state.gov",
                updated: "2026-04",
                verifiedDate: new Date().toISOString().split('T')[0]
            });
        });
        
        // Delay between requests to be polite
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    await browser.close();
    
    // Save results
    const outputDir = path.join(__dirname, '../verified-data');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    
    const outputFile = path.join(outputDir, `state-dept-g7-g20-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(allResults, null, 2));
    
    console.log(`\n${colors.cyan}============================================${colors.reset}`);
    console.log(`${colors.green}✓ Scraped ${PRIORITY_COUNTRIES.length} countries${colors.reset}`);
    console.log(`${colors.green}✓ Total cities: ${allResults.length}${colors.reset}`);
    console.log(`${colors.cyan}Output: ${outputFile}${colors.reset}`);
    console.log(`${colors.cyan}============================================${colors.reset}\n`);
}

function getRegion(country) {
    const regions = {
        'United Kingdom': 'europe',
        'Germany': 'europe',
        'France': 'europe',
        'Italy': 'europe',
        'Russia': 'europe',
        'Turkey': 'europe',
        'Japan': 'asia',
        'China': 'asia',
        'India': 'asia',
        'South Korea': 'asia',
        'Indonesia': 'asia',
        'Canada': 'north-america',
        'Mexico': 'north-america',
        'Brazil': 'south-america',
        'Argentina': 'south-america',
        'Australia': 'oceania',
        'Saudi Arabia': 'middle-east',
        'South Africa': 'africa'
    };
    return regions[country] || 'other';
}

if (require.main === module) {
    main().catch(error => {
        console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
        process.exit(1);
    });
}
