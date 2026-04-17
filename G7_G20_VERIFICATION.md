# G7 + G20 Countries Per Diem Verification

## Scope
Verify current (April 2026) per diem rates for major cities in:
- **G7:** USA, UK, Germany, France, Italy, Japan, Canada
- **G20 Additional:** Argentina, Australia, Brazil, China, India, Indonesia, Mexico, Russia, Saudi Arabia, South Africa, South Korea, Turkey

## Official Source
**U.S. Department of State - Office of Allowances**
- Website: https://allowances.state.gov
- Document: DSSR Section 925
- Publication Date: April 1, 2026
- Update Frequency: Bi-weekly (1st and 15th of each month)

## Verification Challenge

### Technical Issue
The State Department website requires interactive navigation:
1. Dropdown menu selection for countries
2. JavaScript execution for page rendering
3. Cannot be accessed via direct URL queries

**Attempted:**
- Direct URL: `?country=United%20Kingdom` → "Country Not Found"
- Excel file download: `/files/perdiem/PerDiem.xls` → 404 Error
- Text file: `/files/perdiem/PerDiem.txt` → 404 Error
- ExcelVersion.asp → Redirects to homepage

### Solution Required
To properly verify, I need to:
1. Use browser automation with dropdown interaction
2. Manually navigate the State Dept site
3. Or find an alternative bulk data source

## Manual Verification Process

Since automated access is blocked, I'll document the manual lookup process for each country:

### Lookup Steps (Per Country)
1. Navigate to: https://allowances.state.gov/web920/per_diem.asp
2. Select country from "Country Name" dropdown
3. Click "Go" button
4. Record all cities with: Maximum Lodging, M&IE, Total
5. Note effective date and any footnotes
6. Document in this file

---

## UNITED STATES (GSA - CONUS)

**Source:** GSA Per Diem Rates  
**Website:** https://www.gsa.gov/travel/plan-book/per-diem-rates  
**Fiscal Year:** FY 2026 (Oct 1, 2025 - Sep 30, 2026)

### Verification Status: 🔍 IN PROGRESS

**GSA Lookup Tool:** https://www.gsa.gov/travel/plan-book/per-diem-rates/per-diem-rates-lookup

**Challenge:** GSA tool also requires interactive search (dropdown + autocomplete)

**Standard CONUS Rate (FY 2026):**
- Need to verify current standard rate
- Previous FY rates: Lodging ~$107, M&IE ~$68

**Priority Cities to Verify:**
1. ⏸️ Washington, DC
2. ⏸️ New York, NY
3. ⏸️ San Francisco, CA
4. ⏸️ Los Angeles, CA
5. ⏸️ Chicago, IL
6. ⏸️ Boston, MA
7. ⏸️ Seattle, WA
8. ⏸️ Miami, FL

**Manual Lookup Required:** Yes - GSA tool is interactive only

---

## UNITED KINGDOM

**Verification Status:** ⏸️ PENDING

**State Dept Lookup Required**

**Priority Cities:**
1. ⏸️ London
2. ⏸️ Edinburgh
3. ⏸️ Manchester
4. ⏸️ Birmingham

**Expected Process:**
1. Go to State Dept per diem lookup
2. Select "United Kingdom" from dropdown
3. Extract all UK city rates
4. Record effective date: 04/01/2026

---

## GERMANY

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Berlin
2. ⏸️ Munich
3. ⏸️ Frankfurt
4. ⏸️ Hamburg
5. ⏸️ Cologne

---

## FRANCE

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Paris
2. ⏸️ Lyon
3. ⏸️ Marseille
4. ⏸️ Nice
5. ⏸️ Strasbourg

---

## ITALY

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Rome
2. ⏸️ Milan
3. ⏸️ Venice
4. ⏸️ Florence
5. ⏸️ Naples

---

## JAPAN

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Tokyo
2. ⏸️ Osaka
3. ⏸️ Kyoto
4. ⏸️ Yokohama
5. ⏸️ Nagoya

---

## CANADA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Toronto
2. ⏸️ Vancouver
3. ⏸️ Montreal
4. ⏸️ Ottawa
5. ⏸️ Calgary

---

## CHINA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Beijing
2. ⏸️ Shanghai
3. ⏸️ Hong Kong
4. ⏸️ Guangzhou
5. ⏸️ Shenzhen

---

## INDIA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ New Delhi
2. ⏸️ Mumbai
3. ⏸️ Bangalore
4. ⏸️ Hyderabad
5. ⏸️ Chennai

---

## SOUTH KOREA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Seoul
2. ⏸️ Busan
3. ⏸️ Incheon

---

## AUSTRALIA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Sydney
2. ⏸️ Melbourne
3. ⏸️ Brisbane
4. ⏸️ Perth
5. ⏸️ Adelaide

---

## BRAZIL

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ São Paulo
2. ⏸️ Rio de Janeiro
3. ⏸️ Brasília
4. ⏸️ Salvador

---

## MEXICO

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Mexico City
2. ⏸️ Guadalajara
3. ⏸️ Monterrey
4. ⏸️ Cancún

---

## ARGENTINA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Buenos Aires
2. ⏸️ Córdoba
3. ⏸️ Mendoza

---

## RUSSIA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Moscow
2. ⏸️ St. Petersburg
3. ⏸️ Vladivostok

---

## SAUDI ARABIA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Riyadh
2. ⏸️ Jeddah
3. ⏸️ Dhahran

---

## SOUTH AFRICA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Johannesburg
2. ⏸️ Cape Town
3. ⏸️ Durban
4. ⏸️ Pretoria

---

## TURKEY

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Istanbul
2. ⏸️ Ankara
3. ⏸️ Izmir

---

## INDONESIA

**Verification Status:** ⏸️ PENDING

**Priority Cities:**
1. ⏸️ Jakarta
2. ⏸️ Bali (Denpasar)
3. ⏸️ Surabaya

---

## Progress Tracker

### Status Legend
- ✅ **Verified** - Current rates confirmed from official source
- 🔍 **In Progress** - Currently researching
- ⏸️ **Pending** - Awaiting verification
- ❌ **Unable to Verify** - Source not accessible

### Overall Progress
- **Countries:** 0 / 20 verified
- **Cities:** 0 / 80+ verified
- **Completion:** 0%

---

## Immediate Action Required

**The reality:** I cannot programmatically access the State Department's per diem lookup tool. It requires:
- Browser interaction
- Dropdown selection
- JavaScript rendering

**Options:**

### Option A: Manual Lookup (Recommended for accuracy)
- I manually navigate State Dept site
- Look up each country/city
- Document exact rates
- **Time:** 2-3 hours for all G7+G20

### Option B: Browser Automation
- Build Playwright/Puppeteer script
- Automate dropdown selection
- Extract table data
- **Time:** 1-2 hours to build + 30 min to run
- **Risk:** May be blocked

### Option C: Request Access to Bulk Data
- Contact State Dept for API/data dump
- **Time:** Unknown (likely weeks)
- **Reliability:** Low

---

## Recommendation

**I need your approval to proceed with Manual Option A:**

I will:
1. Manually navigate the State Dept website
2. Select each G7+G20 country from dropdown
3. Screenshot or record rates for all cities
4. Document exact verification date/time
5. Update database with verified rates
6. Mark each entry with source + date

**Estimated time:** 2-3 hours for complete G7+G20 verification

**Deliverable:** Fully verified rates for ~80-100 cities across 20 countries

**Alternative:** If you have access to the State Dept site or can navigate it, you could provide me with screenshots/data and I'll integrate it.

---

**Created:** 2026-04-17  
**Status:** Awaiting manual verification  
**Verified:** 0 / 20 countries  
**Next Step:** Manual State Dept lookups
