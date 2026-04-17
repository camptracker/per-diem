# Global Per Diem Expansion - Implementation Plan

## Project Scope

**Original scope:** U.S. government per diem rates (U.S. travelers abroad + domestic)  
**Expanded scope:** Per diem rates from EVERY country's government perspective (e.g., UK gov rates for UK employees, German rates for German employees, etc.)

---

## Estimated Scale

### Countries to Research
- **Target:** 195 UN-recognized countries
- **Realistic goal:** 100+ countries with accessible public data
- **Priority tier 1 (30 countries):** G20, OECD, major economies
- **Priority tier 2 (40 countries):** Developed nations, English sources available
- **Priority tier 3 (30+):** Translation required but accessible

### Data Points Per Country
For each country, we need:
- Official government agency/department
- Legislation/regulation reference
- Per diem rates by destination country
- Currency (local or USD)
- Lodging + meals breakdown
- Update frequency
- Last update date
- Official source URL

### Estimated Work
- **Research hours:** 3-10 hours per country (depending on language, accessibility)
- **Total research:** 300-1000 hours
- **Translation needs:** 60-70% of countries require non-English language skills
- **Data entry/formatting:** Additional 100-200 hours

---

## Challenges Identified

### 1. Language Barriers
**Problem:** Most countries publish regulations in local language only

**Countries affected:**
- All non-English speaking countries (~140 countries)
- Critical examples: China, Japan, Germany, France, Brazil, Russia

**Solutions:**
- Machine translation for regulation titles/navigation
- Native speaker consultation for accuracy
- Focus on tabular data (numbers translate directly)
- Document original language terms for verification

### 2. Access Restrictions
**Problem:** Some data not publicly published

**Likely restricted:**
- Internal civil service manuals
- Classified/sensitive rates
- Decentralized by department
- Private sector only

**Solutions:**
- Document "Not publicly available" in research log
- Note if data exists but is restricted
- Alternative: Contact government agencies directly
- Focus on countries with transparency laws

### 3. Data Format Diversity
**Problem:** No standard format across countries

**Formats encountered:**
- PDF legal gazettes (most common)
- Excel spreadsheets (rare)
- HTML tables (uncommon)
- Embedded in long legal texts

**Solutions:**
- Manual extraction and standardization
- OCR for PDF tables where needed
- Scripting for structured sources
- Quality checks for accuracy

### 4. Update Frequency Variance
**Problem:** Countries update at different intervals

**Observed patterns:**
- Annual (most common - fiscal year)
- Bi-annual (some)
- Quarterly (rare)
- Ad-hoc (developing countries)
- Never (outdated data common)

**Solutions:**
- Document update frequency per country
- Track last update date
- Note when data appears outdated
- Prioritize recently updated sources

### 5. Complexity & Variability
**Problem:** Not all countries use simple per diem models

**Complications:**
- Rates vary by civil service grade/rank
- Different rates by travel purpose
- Seasonal adjustments
- Currency fluctuations
- Regional variations within country

**Solutions:**
- Document standard/average rate where multiple exist
- Note complexity in source metadata
- Provide range if significant variance
- Link to full source for details

---

## Research Methodology

### Phase 1: Source Identification (Per Country)
1. Search official government portals
2. Identify relevant ministry (Finance, Treasury, Civil Service)
3. Locate travel/per diem regulations
4. Document official URLs
5. Note accessibility (public/restricted)

### Phase 2: Data Extraction
1. Download/access source documents
2. Extract destination-specific rates
3. Convert currencies if needed (to USD for standardization)
4. Record effective dates
5. Document source metadata

### Phase 3: Verification
1. Cross-check multiple sources where possible
2. Verify currency and units
3. Check for recent amendments
4. Note any discrepancies

### Phase 4: Database Integration
1. Format data to match existing structure
2. Add country-source relationship tables
3. Update website filtering/search
4. Test data accuracy

### Phase 5: Documentation
1. Update DATA_SOURCES.md
2. Credit all sources properly
3. Note limitations/caveats
4. Document update schedule

---

## Technical Implementation

### Database Schema Changes

**New table: Country Sources**
```javascript
{
    sourceCountryCode: "GBR",
    sourceCountryName: "United Kingdom",
    sourceAgency: "Cabinet Office",
    sourceUrl: "https://...",
    regulation: "Civil Service Travel Guidance 2024",
    currency: "GBP",
    lastUpdated: "2024-04",
    updateFrequency: "annual",
    accessibility: "public",
    language: "en"
}
```

**Expanded per diem table:**
```javascript
{
    sourceCountry: "United Kingdom",  // NEW
    sourceCountryCode: "GBR",         // NEW
    destinationCountry: "France",
    destinationCity: "Paris",
    lodging: 150,
    meals: 75,
    total: 225,
    currency: "GBP",                  // Source country currency
    sourceAgency: "UK Cabinet Office", // NEW
    sourceUrl: "https://...",
    regulation: "...",                // NEW
    updated: "2024-04"
}
```

### Website Updates

**New filters:**
- Source country dropdown (select which gov's rates to view)
- Multi-currency display option
- Date range filter (show only recent data)

**New features:**
- Country comparison view (compare UK vs Germany rates for same destination)
- Currency converter (show in USD, EUR, or source currency)
- Data freshness indicator (color-code by last update)

**Enhanced search:**
- Search by source country
- Search by regulation name
- Filter by data quality/freshness

---

## Recommended Approach

### Option A: Phased Rollout (Recommended)
**Timeline:** 3-6 months  
**Approach:**
1. **Phase 1 (Month 1):** G7 countries (UK, Canada, Germany, France, Italy, Japan)
2. **Phase 2 (Month 2):** G20 expansion (add 13 more major economies)
3. **Phase 3 (Month 3-4):** OECD countries (30 additional developed nations)
4. **Phase 4 (Month 5-6):** Best effort for remaining countries

**Pros:**
- Deliver value incrementally
- Learn/refine process early
- Highest-value data first
- Manageable scope

**Cons:**
- Not "complete" initially
- Multiple update cycles

### Option B: Comprehensive Research First
**Timeline:** 6-12 months  
**Approach:**
1. Research all 195 countries before any database updates
2. Build complete dataset
3. Launch with full coverage

**Pros:**
- Complete from day one
- Single large update
- Consistent methodology

**Cons:**
- No value until complete
- High risk of incomplete/abandoned work
- Delayed launch

### Option C: Crowdsourced/Automated Hybrid
**Timeline:** 2-4 months initial + ongoing  
**Approach:**
1. Build framework and automation tools
2. Start with automated scraping where possible
3. Open-source the research
4. Accept community contributions
5. Manual research for gaps

**Pros:**
- Leverage community
- Scalable approach
- Continuous improvement
- Reduced manual work

**Cons:**
- Quality control challenges
- Requires building contribution framework
- Slower initial progress

---

## Current Status

### ✅ Completed
- Initial research framework created
- Methodology documented
- 50+ countries researched (locations identified)
- Canada source partially identified

### 🔍 In Progress
- Canada: National Joint Council Travel Directive (found, extracting data)
- UK: Civil Service subsistence rates (searching)
- Research document structure (ongoing)

### ⏸️ Pending
- 193 countries remaining
- Database schema updates
- Website UI/UX changes
- Data extraction automation

---

## Resource Requirements

### Time Investment
- **Solo research:** 300-1000 hours (3-12 months full-time equivalent)
- **With assistance:** 100-300 hours (1-3 months with translators/researchers)
- **Automated approach:** 50-150 hours setup + ongoing maintenance

### Skills Needed
- Multi-language capability (or translation budget)
- Legal/regulatory document navigation
- Data extraction/scraping
- Database design
- Web development (UI updates)

### Tools/Services
- Translation services (Google Translate, DeepL, or human)
- PDF/OCR tools for data extraction
- Spreadsheet software for data organization
- Version control for tracking updates

---

## Recommendations

### Immediate Next Steps
1. **Define scope with stakeholder (Jon):**
   - Full 195 countries or tier 1 priority only?
   - Timeline expectations?
   - Quality vs. speed trade-off?

2. **Choose approach:**
   - Phased rollout (recommended)?
   - All-at-once comprehensive?
   - Community-driven?

3. **Start with pilot:**
   - Complete 5-10 countries fully
   - Validate methodology
   - Estimate actual time per country
   - Refine process

### Suggested Pilot Countries
1. **Canada** (English, likely detailed data)
2. **Australia** (English, Commonwealth system)
3. **UK** (English, should be accessible)
4. **Germany** (Major economy, EU standard)
5. **Japan** (Asian perspective, translation practice)

**Deliverable:** Pilot phase adds 5 countries' perspectives, ~25-50 new data points, validates entire process.

---

## Questions for Decision

1. **Scope:** Aim for all 195 countries or focus on top 50-100?
2. **Timeline:** Launch phases incrementally or wait for comprehensive data?
3. **Resources:** Solo research or budget for translation/assistance?
4. **Accuracy:** Demand perfection or accept "best available" data?
5. **Maintenance:** Commit to ongoing updates or one-time project?

---

**Document created:** 2026-04-17  
**Status:** Awaiting stakeholder decision on scope and approach  
**Next action:** Define pilot phase and begin execution
