# State Department Scraping - In Progress

## What's Happening

I'm building and running a browser automation script to scrape **ALL foreign country** per diem rates from the State Department website.

## Current Status

⏳ **Installing Playwright** (browser automation library)
- This downloads Chrome/Chromium binaries (~300MB)
- Estimated time: 2-3 minutes

🔄 **Then will scrape:**
- G7 countries: UK, Germany, France, Italy, Japan, Canada
- G20 additional: Australia, Brazil, China, India, Indonesia, Mexico, Russia, Saudi Arabia, South Africa, South Korea, Turkey, Argentina
- **Total: 18 countries** for G7+G20
- Estimated time: 10-15 minutes (2-3 seconds per country)

## How It Works

The script:
1. Opens a real Chrome browser (visible, not headless)
2. Navigates to https://allowances.state.gov/web920/per_diem.asp
3. Selects each country from dropdown
4. Clicks "Go" button
5. Waits for results table to load
6. Extracts city names, lodging, meals, total per diem
7. Saves to JSON file
8. Moves to next country

## Why This Works

✅ **State Dept has ALL countries** (195+ total)
✅ **One authoritative source** (US government official rates)
✅ **Consistent format** (same table structure for all countries)
✅ **Publicly accessible** (no authentication needed)
✅ **Current data** (updated bi-weekly on 1st and 15th)

## What You'll Get

**Output file:** `verified-data/state-dept-g7-g20-YYYY-MM-DD.json`

**Expected data:**
- ~80-100 cities across G7+G20 countries
- Full per diem breakdown (lodging + meals + total)
- All in USD
- Verified from official source
- Ready to integrate into database

## Next Steps After Scraping

1. ✅ Verify data quality
2. ✅ Convert JSON to JavaScript array
3. ✅ Merge with existing 346 US cities
4. ✅ Update data.js
5. ✅ Push to GitHub
6. ✅ Site auto-deploys with ALL data

**Total entries after completion:**
- 346 US cities (already done)
- ~80-100 foreign cities (scraping now)
- **~430+ total verified locations** 🎉

## Can Expand Later

After G7+G20, the script can easily scrape:
- All 195 countries (just add to list)
- Would give 1,000+ cities worldwide
- Same process, just takes longer

---

**Status:** In progress  
**Started:** 2026-04-17 15:40 PDT  
**Expected completion:** ~15-20 minutes
