# Strategy: Scraping Per Diem from Multiple Countries

## The Challenge

Each country's government publishes per diem/travel allowances differently:
- **No standard format** across countries
- **Different languages** (German, French, Japanese, etc.)
- **Various publication methods** (PDFs, websites, internal documents)
- **Different update schedules** (annual, quarterly, ad-hoc)
- **Sometimes not public** (internal civil service only)

## Countries Researched

### ✅ United States (COMPLETE)
**Source:** GSA Per Diem API  
**Coverage:** All 50 states, 346 locations  
**Access:** Public API with free key  
**Status:** ✅ 346 entries verified and live  
**URL:** https://api.gsa.gov/travel/perdiem/v2/

---

### 🔍 Canada
**Source:** National Joint Council Travel Directive  
**Coverage:** Domestic Canada + international destinations  
**Access:** Public website, no API  
**URL:** https://www.njc-cnm.gc.ca/directive/d10/en  
**Format:** HTML tables (Appendix C, D, E)

**What we found:**
- Domestic rates (Canada & Alaska/Yukon/NWT/Nunavut)
- Meals breakdown (breakfast/lunch/dinner)
- Incidentals
- International travel (references Appendix D)

**How to scrape:**
- Direct URL access to appendices
- Parse HTML tables
- Extract: location, lodging (private accommodation), meals, incidentals

**Status:** ⏸️ Feasible - HTML scraping required

---

### 🔍 United Kingdom
**Source:** HMRC + Civil Service guidance  
**Coverage:** UK domestic subsistence rates  
**Access:** Public manuals  
**URL:** https://www.gov.uk/hmrc-internal-manuals/employment-income-manual/

**What we found:**
- Benchmark subsistence rates (meals only, £5-£15)
- **No official overseas per diem** published publicly
- Civil service likely has internal guidance (not public)

**Challenge:** 
- UK doesn't publish comprehensive per diem tables like US
- Rates are for tax purposes, not travel allowances
- Overseas rates may be internal/classified

**Status:** ❌ Limited public data

---

### 🔍 Germany
**Source:** Bundesreisekostengesetz (Federal Travel Expenses Act)  
**Coverage:** Federal employees travel within Germany + abroad  
**Access:** Federal law + implementing regulations  
**Expected URL:** bundesreisekostengesetz.de or bundesministerium sites

**Format:** Likely PDF tables in German

**How to scrape:**
- Find official BMI (Interior Ministry) or BMF (Finance Ministry) publication
- Download PDF
- OCR/parse German tables
- Translate country names to English

**Status:** ⏸️ Research needed - German language

---

### 🔍 France
**Source:** Ministry of Public Service circulars  
**Coverage:** French civil servants - domestic + overseas  
**Expected:** "Indemnités de mission" regulations

**Format:** Official government decrees/circulars (French)

**Status:** ⏸️ Research needed - French language

---

### 🔍 Japan
**Source:** Ministry of Finance / National Personnel Authority  
**Coverage:** National public servants  
**Expected:** 国家公務員等の旅費に関する法律 (Travel expense law)

**Format:** Japanese government regulations

**Challenge:** Japanese language, complex bureaucratic structure

**Status:** ⏸️ Research needed - Japanese language

---

### 🔍 Australia
**Source:** Department of Finance  
**Coverage:** APS (Australian Public Service) employees  
**URL:** https://www.finance.gov.au/  
**Expected:** "Travelling allowance" determinations

**Format:** Likely HTML/PDF tables in English

**Status:** ⏸️ Feasible - English language

---

## Practical Approaches

### Approach 1: Focus on English-Speaking Countries (Fastest)
**Countries:** US, Canada, UK, Australia, New Zealand, Ireland, Singapore  
**Advantage:** No translation needed, likely to have public data  
**Time:** 1-2 weeks  
**Coverage:** ~7 countries

### Approach 2: Major Economies (EU + Asia)
**Countries:** Germany, France, Japan, South Korea  
**Advantage:** G7/G20 representation  
**Challenge:** Translation + research time  
**Time:** 3-4 weeks  
**Coverage:** +4 countries (total: ~11)

### Approach 3: Comprehensive (All G20)
**Countries:** All 20 G20 members  
**Challenge:** Multiple languages, varying data availability  
**Time:** 2-3 months  
**Coverage:** 20 countries

### Approach 4: Stick with US State Dept (Simplest)
**Source:** US State Department per diem for all countries  
**Advantage:** One consistent source, USD, already attempted  
**Challenge:** Website blocks automation (manual entry needed)  
**Time:** 2-3 hours manual work  
**Coverage:** 195+ countries (from US perspective only)

---

## Recommended Strategy

### Phase 1: US + "Easy" Countries (This Week)
1. ✅ US: Done (346 locations)
2. 🔄 Canada: Scrape NJC tables
3. 🔄 Australia: Research + scrape if available
4. 🔄 UK: Document limitations (no comprehensive public data)

### Phase 2: Manual US State Dept (If automation fails)
- Manually enter G7+G20 countries from State Dept
- ~80-100 cities
- 2-3 hours work
- **Single authoritative source for all countries**

### Phase 3: Expand Later (Optional)
- Germany, France (if we find bulk downloads)
- Only if there's demand for "host country perspective"

---

## Key Insight

**The US State Department is the BEST single source** because:
- ✅ Covers ALL 195+ countries
- ✅ Consistent format
- ✅ Updated bi-weekly
- ✅ In USD (easy comparison)
- ✅ Already authoritative (used by US gov)

**Problem:** Website blocks automation

**Solution:** Manual entry or find someone who's already scraped it

---

## What Makes Sense

Given the constraints, I recommend:

### Option A: Manual State Dept Entry
- I manually look up G7+G20 from State Dept website
- ~80-100 foreign cities
- 2-3 hours of work
- **Result:** Complete G7+G20 coverage (US domestic + foreign)

### Option B: Canada + Australia APIs
- Research if Canada/Australia have APIs
- Add those 2 countries
- **Result:** 3 countries (US, Canada, Australia)

### Option C: Accept US-Only
- Keep 346 US cities
- Add notice: "International rates coming soon"
- **Result:** Comprehensive US coverage, clean dataset

---

## My Recommendation

**Do Option A (Manual State Dept Entry) NOW:**
- Fastest path to comprehensive G7+G20 data
- One consistent source
- Then optionally add Canada/Australia later

**Want me to start manual entry?** I can have G7+G20 foreign cities done today.

---

**Bottom line:** Most countries don't have US-style public APIs for per diem. Manual entry from State Dept is the most practical approach for comprehensive global coverage.
