# Per Diem Verification Scripts

## Quick Start

### 1. Get GSA API Key (2 minutes)

1. Visit: https://open.gsa.gov/api/perdiem/
2. Scroll to "Getting started" section
3. Fill out the API key signup form (name + email)
4. **Instant approval** - key sent via email immediately
5. Set environment variable:
   ```bash
   export GSA_API_KEY="your-api-key-here"
   ```

### 2. Run GSA Verification (Domestic US Rates)

```bash
cd ~/Documents/per-diem/scripts
node fetch-gsa-data.js
```

**What it does:**
- ✅ Fetches standard CONUS rate
- ✅ Fetches 15 priority US cities (DC, NYC, SF, LA, Chicago, etc.)
- ✅ Verifies against FY 2026 official rates
- ✅ Documents verification date and source
- ✅ Outputs verified JSON + JavaScript entries

**Time:** ~1-2 minutes  
**Output:** `verified-data/gsa-verified-YYYY-MM-DD.json`

### 3. Manual State Department Verification (Foreign Rates)

**Source:** https://allowances.state.gov/web920/per_diem.asp

**Process:**
1. Navigate to State Dept per diem lookup
2. Select country from dropdown
3. Click "Go" to view all cities
4. Record rates for each city
5. Document in `MANUAL_VERIFICATION_LOG.md`

**Required for:** G7+G20 foreign countries (UK, Germany, France, Japan, etc.)

**Time:** ~2-3 hours for full G7+G20  
**Alternative:** State Dept website blocks automation - must be done manually

---

## Scripts

### `fetch-gsa-data.js`

**Purpose:** Auto-verify US domestic per diem rates from GSA API

**Requirements:**
- Node.js
- GSA API key (free, instant)

**Usage:**
```bash
export GSA_API_KEY="your-key"
node fetch-gsa-data.js
```

**Output:**
- JSON file: `verified-data/gsa-verified-YYYY-MM-DD.json`
- Console output: JavaScript entries ready to paste into `data.js`

**Rate Limit:** 1,000 requests/hour (script includes conservative delays)

### `integrate-verified-data.js` (Coming Soon)

**Purpose:** Automatically integrate verified JSON into data.js

**Usage:**
```bash
node integrate-verified-data.js verified-data/gsa-verified-2026-04-17.json
```

### `verify-state-dept.md` (Manual Process)

**Purpose:** Step-by-step guide for manual State Dept verification

**Covers:**
- Navigation instructions
- Data recording template
- Quality checks
- Integration process

---

## Verification Workflow

### Step 1: GSA API (Automated - 15 minutes)

```bash
# Get API key from https://open.gsa.gov/api/perdiem/
export GSA_API_KEY="your-key-here"

# Fetch and verify US rates
cd ~/Documents/per-diem/scripts
node fetch-gsa-data.js

# Review output
cat verified-data/gsa-verified-$(date +%Y-%m-%d).json
```

**Result:** 15-20 verified US cities

### Step 2: State Dept Manual Lookup (2-3 hours)

**G7 Countries:**
1. United Kingdom → London, Edinburgh, Manchester
2. Germany → Berlin, Munich, Frankfurt, Hamburg
3. France → Paris, Lyon, Marseille, Nice
4. Italy → Rome, Milan, Venice, Florence
5. Japan → Tokyo, Osaka, Kyoto, Yokohama
6. Canada → Toronto, Vancouver, Montreal, Ottawa

**G20 Additional:**
7. Australia → Sydney, Melbourne, Brisbane, Perth
8. China → Beijing, Shanghai, Hong Kong, Guangzhou
9. India → New Delhi, Mumbai, Bangalore, Hyderabad
10. South Korea → Seoul, Busan
11. Brazil → São Paulo, Rio de Janeiro, Brasília
12. Mexico → Mexico City, Guadalajara, Monterrey
13. Argentina → Buenos Aires
14. Russia → Moscow, St. Petersburg
15. Saudi Arabia → Riyadh, Jeddah
16. South Africa → Johannesburg, Cape Town, Durban
17. Turkey → Istanbul, Ankara
18. Indonesia → Jakarta, Bali

**Process:**
1. Open: https://allowances.state.gov/web920/per_diem.asp
2. For each country:
   - Select from dropdown
   - Click "Go"
   - Screenshot or record all city rates
   - Document in `MANUAL_VERIFICATION_LOG.md`
   - Add verified entries to `data.js`

### Step 3: Integration & Deploy

```bash
# Review all verified entries
cat verified-data/*.json

# Update data.js with verified entries
# (manual step - paste JavaScript output)

# Commit and push
cd ~/Documents/per-diem
git add -A
git commit -m "Add verified per diem data for G7+G20 countries"
git push

# GitHub Pages will auto-deploy in 1-2 minutes
```

### Step 4: Quality Check

1. Visit https://camptracker.github.io/per-diem/
2. Search for verified cities
3. Verify rates match official sources
4. Check "Last Updated" dates display correctly

---

## Data Format

### Verified Entry Structure

```javascript
{
    country: "United States",
    region: "north-america",
    city: "Washington, DC",
    lodging: 224,
    meals: 79,
    total: 303,
    currency: "USD",
    source: "GSA",
    sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates",
    updated: "2026-10",
    verifiedDate: "2026-04-17",
    fiscalYear: 2026
}
```

### Required Fields
- ✅ `country` - Full country name
- ✅ `region` - Geographic region (7 categories)
- ✅ `city` - City name or "Standard Rate"
- ✅ `lodging` - Daily lodging allowance (USD)
- ✅ `meals` - Daily M&IE (USD)
- ✅ `total` - Sum of lodging + meals
- ✅ `currency` - Always "USD" for US sources
- ✅ `source` - "GSA" or "US State Dept"
- ✅ `sourceUrl` - Official source URL
- ✅ `updated` - Effective date (YYYY-MM)

### Optional Fields
- `verifiedDate` - Date of verification
- `fiscalYear` - Fiscal year (GSA only)
- `state` - US state code (GSA only)
- `county` - County name (GSA only)
- `seasonalRates` - Array of monthly variations

---

## Troubleshooting

### GSA API Key Not Working

**Error:** `403 - API key missing or invalid`

**Solutions:**
1. Verify environment variable is set: `echo $GSA_API_KEY`
2. Check for spaces/typos in API key
3. Request new key if expired
4. Try alternate header format in script

### Rate Limit Exceeded

**Error:** `429 - Too Many Requests`

**Solution:**
- Default limit: 1,000/hour
- Script includes 200ms delays
- If still hitting limit, increase delay in script
- Contact GSA for higher limit: digitalteam@gsa.gov

### State Dept Website Not Loading

**Issue:** Dropdown not working or "Country Not Found"

**Solutions:**
1. Use Chrome/Firefox (not Safari)
2. Disable ad blockers
3. Clear browser cache
4. Try different time of day (site may be slow)
5. Download Excel file alternative (if available)

---

## Next Steps

### Automation Improvements

1. **State Dept Scraper** (requires Playwright/Puppeteer)
   - Automate dropdown selection
   - Extract table data
   - Would save 2-3 hours of manual work

2. **Scheduled Updates**
   - GitHub Actions cron job
   - Auto-fetch new rates when published
   - Alert on rate changes

3. **Data Validation**
   - Check for rate decreases (unusual)
   - Flag missing cities
   - Verify fiscal year consistency

---

## Contact

Questions or issues?
- File issue: https://github.com/camptracker/per-diem/issues
- GSA API support: digitalteam@gsa.gov
- State Dept: Contact form at allowances.state.gov

**Last Updated:** 2026-04-17  
**Scripts Version:** 1.0
