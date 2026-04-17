# Per Diem Data Audit & Verification Log

## Purpose
Verify every per diem rate in the database against official current sources.
Document the lookup process for each entry.

## Audit Date
Started: 2026-04-17

## Verification Standards
- ✅ **Verified** - Confirmed against official source with current fiscal year rates
- ⚠️ **Estimated** - Based on typical rates but not directly verified
- ❌ **Incorrect** - Found discrepancy, needs correction
- 🔍 **Pending** - Awaiting verification

---

## United States (GSA - CONUS Rates)

**Source:** https://www.gsa.gov/travel/plan-book/per-diem-rates  
**Fiscal Year:** FY 2026 (October 1, 2025 - September 30, 2026)  
**Last Official Update:** October 1, 2025

### Verification Process
1. Go to GSA Per Diem Rates page
2. Select current fiscal year (FY 2026)
3. Search by city/state
4. Record lodging + M&IE breakdown
5. Calculate total

### Washington, DC 🔍
**Current Database:**
- Lodging: $224
- M&IE: $79
- Total: $303

**Verification:**
- Need to check GSA tool for FY 2026 rates
- Status: PENDING - requires manual GSA lookup

### New York, NY 🔍
**Current Database:**
- Lodging: $296
- M&IE: $79
- Total: $375

**Verification:**
- Need to check GSA tool for FY 2026 rates
- Note: NYC rates vary by borough
- Status: PENDING

### San Francisco, CA 🔍
**Current Database:**
- Lodging: $296
- M&IE: $79
- Total: $375

**Verification:**
- Need to check GSA tool for FY 2026 rates
- Status: PENDING

### Los Angeles, CA 🔍
**Current Database:**
- Lodging: $165
- M&IE: $79
- Total: $244

**Verification:**
- Need to check GSA tool for FY 2026 rates
- Status: PENDING

### Chicago, IL 🔍
**Current Database:**
- Lodging: $184
- M&IE: $79
- Total: $263

**Verification:**
- Need to check GSA tool for FY 2026 rates
- Status: PENDING

### Standard CONUS Rate 🔍
**Current Database:**
- Lodging: $107
- M&IE: $68
- Total: $175

**Verification:**
- This is the baseline rate for unlisted locations
- Need to confirm FY 2026 standard rate
- Status: PENDING

**Note:** GSA rates can be looked up at: https://www.gsa.gov/travel/plan-book/per-diem-rates/per-diem-rates-lookup

---

## Foreign Locations (U.S. State Department)

**Source:** https://allowances.state.gov  
**Document:** DSSR Section 925 - Foreign Per Diem Rates  
**Publication Date:** April 1, 2026 (biweekly updates on 1st and 15th)  
**Last Update:** April 1, 2026

### Verification Process
1. Go to https://allowances.state.gov/web920/per_diem.asp
2. Select country from dropdown
3. Click "Go" to view all locations in that country
4. Record Maximum Lodging Rate, M&IE Rate, and Total
5. Note effective date

**CRITICAL:** The State Dept website appears to have technical issues with direct URL access. May need:
- Manual browser navigation
- Excel file download (https://allowances.state.gov/ExcelVersion.asp)
- Alternative: Use the search tool at https://allowances.state.gov/web920/search.asp

---

## United Kingdom 🔍

### London
**Current Database:**
- Lodging: $285
- M&IE: $141
- Total: $426

**Verification Process:**
1. Navigate to State Dept per diem lookup
2. Select "United Kingdom" from country dropdown
3. Find "London" in location list
4. Verify rates effective 04/01/2026

**Status:** PENDING - Website navigation issues

### Edinburgh
**Current Database:**
- Lodging: $196
- M&IE: $125
- Total: $321

**Status:** PENDING

### Manchester
**Current Database:**
- Lodging: $146
- M&IE: $115
- Total: $261

**Status:** PENDING

---

## Germany 🔍

### Berlin
**Current Database:**
- Lodging: $198
- M&IE: $125
- Total: $323

**Verification:** PENDING

### Munich
**Current Database:**
- Lodging: $224
- M&IE: $133
- Total: $357

**Verification:** PENDING

### Frankfurt
**Current Database:**
- Lodging: $182
- M&IE: $121
- Total: $303

**Verification:** PENDING

### Hamburg
**Current Database:**
- Lodging: $165
- M&IE: $118
- Total: $283

**Verification:** PENDING

---

## France 🔍

### Paris
**Current Database:**
- Lodging: $301
- M&IE: $157
- Total: $458

**Verification:** PENDING

### Lyon
**Current Database:**
- Lodging: $165
- M&IE: $119
- Total: $284

**Verification:** PENDING

### Marseille
**Current Database:**
- Lodging: $148
- M&IE: $112
- Total: $260

**Verification:** PENDING

### Nice
**Current Database:**
- Lodging: $195
- M&IE: $128
- Total: $323

**Verification:** PENDING

---

## Known Issues & Blockers

### Technical Challenges
1. **State Dept Website:** Direct URL queries returning "Country Not Found" errors
   - May require:
     - Manual browser interaction
     - JavaScript execution for dropdown
     - Excel file download for bulk verification

2. **GSA Per Diem Tool:** Requires interactive search
   - Cannot be fetched via simple web_fetch
   - Need browser automation or manual verification

3. **Current Fiscal Year:** April 2026
   - GSA FY 2026 (Oct 1, 2025 - Sep 30, 2026)
   - State Dept: Publication date 04/01/2026
   - Need to ensure we're using current rates, not archived

### Solutions Needed
1. **Browser automation** to navigate State Dept dropdown menus
2. **Excel file download** from State Dept for bulk verification
3. **Manual spot checks** for high-priority locations
4. **GSA API or scraping** for CONUS rates

---

## Next Steps

### Immediate Actions
1. ✅ Document audit framework (this file)
2. 🔍 Attempt Excel file download from State Dept
3. 🔍 Use browser automation to verify top 10 locations
4. 🔍 Manual GSA lookups for major US cities

### Priority Verification (Top 20 Locations)
1. New York, NY (USA)
2. London (UK)
3. Paris (France)
4. Tokyo (Japan)
5. Hong Kong (China)
6. Geneva (Switzerland)
7. Zurich (Switzerland)
8. Singapore
9. Dubai (UAE)
10. Sydney (Australia)
11. San Francisco, CA (USA)
12. Washington, DC (USA)
13. Shanghai (China)
14. Beijing (China)
15. Seoul (South Korea)
16. Mumbai (India)
17. Toronto (Canada)
18. Frankfurt (Germany)
19. Amsterdam (Netherlands)
20. Stockholm (Sweden)

### Documentation Requirements
For each verified entry, record:
- Exact URL or navigation path used
- Screenshot if possible
- Date of verification
- Effective date of rate
- Any footnotes or special conditions

---

## Admission of Current Data Source

### Reality Check ⚠️
The initial database entries were **estimated based on typical per diem ranges** for each location, using:
- General knowledge of cost-of-living
- Typical government per diem patterns
- Rough USD equivalents

**This is NOT acceptable** for a production database.

### What Needs to Happen
**Every single entry** must be:
1. Looked up in the official source
2. Verified against current fiscal year rates
3. Documented with source path/URL
4. Updated if discrepancies found
5. Marked with last verification date

### Estimated vs. Verified Count
- Total entries: 150
- Verified: 0
- Pending verification: 150

**This audit is critical to database credibility.**

---

## Alternative Verification Methods

### Option 1: Excel File Download
State Dept publishes full per diem tables in Excel format.
- **URL:** https://allowances.state.gov/ExcelVersion.asp
- **Advantage:** All rates in one file
- **Challenge:** Need to download and parse

### Option 2: Browser Automation
Use Playwright/Puppeteer to:
1. Navigate to per diem lookup page
2. Select country from dropdown
3. Extract table data
4. Parse and verify against database

### Option 3: Manual Verification
Systematic manual lookups:
- Tier 1: Top 50 locations (highest priority)
- Tier 2: Next 50 locations
- Tier 3: Remaining 50 locations

**Estimated Time:**
- Manual: 2-3 minutes per location = 7-8 hours total
- Automated: 1-2 hours setup + 30 min run time

---

## Commitment to Accuracy

Moving forward, **zero tolerance policy** for unverified data:
- Every new entry must include source verification
- Monthly audits to catch rate changes
- Automated alerts when State Dept publishes updates
- Clear "Last Verified" date on website

**Transparency:** Website should display:
- Last verification date per entry
- Link to official source
- "Report incorrect rate" feature

---

**Audit Status:** IN PROGRESS  
**Started:** 2026-04-17  
**Completion Target:** TBD  
**Verified Entries:** 0 / 150  
**Accuracy:** UNKNOWN - Audit required
