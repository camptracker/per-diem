#!/usr/bin/env node

/**
 * Simple State Dept Scraper
 * Scrapes G7+G20 countries per diem data
 */

const playwright = require('playwright');
const fs = require('fs');
const path = require('path');

const COUNTRIES = [
    'UNITED KINGDOM', 'GERMANY', 'FRANCE', 'ITALY', 'JAPAN', 'CANADA',
    'AUSTRALIA', 'BRAZIL', 'CHINA', 'INDIA', 'INDONESIA', 'MEXICO',
    'RUSSIA', 'SAUDI ARABIA', 'SOUTH AFRICA', 'Korea, South', 'TURKEY', 'ARGENTINA'
];

async function scrape() {
    console.log('🚀 Starting State Dept scraper...\n');
    
    const browser = await playwright.chromium.launch({ headless: false });
    const page = await browser.newPage();
    
    const allData = [];
    
    for (const country of COUNTRIES) {
        try {
            console.log(`📍 Scraping ${country}...`);
            
            await page.goto('https://allowances.state.gov/web920/per_diem.asp', {
                waitUntil: 'domcontentloaded',
                timeout: 30000
            });
            
            // Wait a bit for page to be ready
            await page.waitForTimeout(2000);
            
            // Select country from dropdown
            await page.selectOption('select[name="CountryCode"]', { label: country });
            
            // Click the submit button
            await page.click('input[type="submit"][value="  Go  "]');
            
            // Wait for results page
            await page.waitForLoadState('networkidle', { timeout: 15000 });
            
            // Extract data from table
            const cities = await page.evaluate(() => {
                const results = [];
                const rows = document.querySelectorAll('table table tr');
                
                for (let i = 1; i < rows.length; i++) {
                    const cells = rows[i].querySelectorAll('td');
                    if (cells.length >= 7) {
                        const city = cells[1]?.textContent?.trim();
                        const lodging = cells[4]?.textContent?.trim();
                        const meals = cells[5]?.textContent?.trim();
                        const total = cells[6]?.textContent?.trim();
                        
                        if (city && lodging) {
                            results.push({
                                city,
                                lodging: parseInt(lodging.replace(/[^0-9]/g, '')) || 0,
                                meals: parseInt(meals.replace(/[^0-9]/g, '')) || 0,
                                total: parseInt(total.replace(/[^0-9]/g, '')) || 0
                            });
                        }
                    }
                }
                return results;
            });
            
            console.log(`  ✅ Found ${cities.length} cities`);
            
            cities.forEach(city => {
                allData.push({
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
            
            // Delay between requests
            await page.waitForTimeout(3000);
            
        } catch (error) {
            console.log(`  ❌ Error: ${error.message}`);
        }
    }
    
    await browser.close();
    
    // Save results
    const outputFile = path.join(__dirname, '../verified-data', `state-dept-${new Date().toISOString().split('T')[0]}.json`);
    fs.writeFileSync(outputFile, JSON.stringify(allData, null, 2));
    
    console.log(`\n✅ Done! Scraped ${COUNTRIES.length} countries, ${allData.length} total cities`);
    console.log(`📁 Saved to: ${outputFile}`);
}

function getRegion(country) {
    const map = {
        'UNITED KINGDOM': 'europe', 'GERMANY': 'europe', 'FRANCE': 'europe', 'ITALY': 'europe',
        'RUSSIA': 'europe', 'TURKEY': 'europe', 'JAPAN': 'asia', 'CHINA': 'asia', 'INDIA': 'asia',
        'Korea, South': 'asia', 'INDONESIA': 'asia', 'CANADA': 'north-america', 'MEXICO': 'north-america',
        'BRAZIL': 'south-america', 'ARGENTINA': 'south-america', 'AUSTRALIA': 'oceania',
        'SAUDI ARABIA': 'middle-east', 'SOUTH AFRICA': 'africa'
    };
    return map[country] || 'other';
}

scrape().catch(console.error);
