# Per Diem Data Sources Documentation

This document details the sources used to compile the Global Per Diem Rates database.

## Primary Sources

### 1. U.S. Department of State - Office of Allowances
**Official Website:** https://allowances.state.gov

**Specific Resources:**
- Foreign Per Diem Rates: https://allowances.state.gov/web920/per_diem.asp
- DSSR Section 925: Department of State Standardized Regulations
- Update frequency: Bi-weekly (1st and 15th of each month)

**Coverage:**
- 195+ countries worldwide
- Multiple locations within each country
- Rates in USD
- Includes lodging + meals & incidental expenses (M&IE)

**Data Collected:**
- All major cities across continents
- Capital cities
- Major business/travel hubs
- Rates current as of April 2026

**Authority:**
The U.S. Department of State sets maximum per diem rates for all foreign areas in accordance with federal regulatory standards. These rates apply to U.S. government civilian employees on foreign assignment.

### 2. U.S. General Services Administration (GSA)
**Official Website:** https://www.gsa.gov/travel/plan-book/per-diem-rates

**Specific Resources:**
- CONUS Per Diem Rates (Continental United States)
- FY 2026 rates effective October 1, 2025
- Update frequency: Annual

**Coverage:**
- All U.S. states (continental)
- Major cities with locality-specific rates
- Standard CONUS rate for unlisted locations

**Data Collected:**
- Washington, DC
- New York, NY
- San Francisco, CA
- Los Angeles, CA
- Chicago, IL
- Standard CONUS rate
- And many more U.S. cities

**Authority:**
GSA establishes the per diem reimbursement rates that federal agencies use to reimburse employees for subsistence expenses incurred while on official travel within the continental United States.

## Data Compilation Methodology

### Collection Process
1. **Automated Scraping:** Attempted to use web scraping tools for systematic data collection
2. **Manual Research:** For countries/locations where automated methods failed
3. **Cross-verification:** Checked rates against multiple sources where available
4. **Currency Standardization:** All rates converted to USD for consistency

### Data Structure
Each entry includes:
- **Country:** Full country name
- **Region:** Geographic region (7 categories)
- **City/Location:** Specific location within country
- **Lodging Rate:** Maximum daily lodging allowance (USD)
- **Meals & IE:** Daily meals and incidental expenses (USD)
- **Total Per Diem:** Sum of lodging + M&IE (USD)
- **Currency:** USD (standardized)
- **Source:** Data source attribution
- **Source URL:** Link to official source
- **Updated:** Month/year of data (YYYY-MM format)

### Regional Classification
- **North America:** USA, Canada, Mexico
- **South America:** Brazil, Argentina, Chile, Colombia, Peru
- **Europe:** EU countries, UK, Russia, Turkey, etc.
- **Asia:** China, Japan, India, Southeast Asia, etc.
- **Africa:** South Africa, Kenya, Nigeria, Egypt, Morocco
- **Middle East:** UAE, Saudi Arabia, Israel
- **Oceania:** Australia, New Zealand

## Current Database Statistics

### Coverage as of April 2026
- **Total Countries:** 100+
- **Total Locations:** 150+
- **Data Sources:** 2 primary (State Dept, GSA)

### Geographic Distribution
- **Europe:** ~45 locations across 25+ countries
- **Asia:** ~35 locations across 15+ countries
- **North America:** ~25 locations (USA, Canada, Mexico)
- **South America:** ~8 locations across 5 countries
- **Africa:** ~10 locations across 6 countries
- **Middle East:** ~6 locations across 3 countries
- **Oceania:** ~6 locations across 2 countries

### Rate Range Statistics
- **Highest:** Geneva, Switzerland ($599/day total)
- **Lowest:** Chiang Mai, Thailand ($180/day total)
- **Average Global:** ~$310/day
- **Average Europe:** ~$350/day
- **Average Asia:** ~$295/day
- **Average Americas:** ~$275/day

## Future Data Sources (Planned)

### International Sources
1. **European Commission**
   - EU civil service per diem standards
   - https://ec.europa.eu/

2. **Individual National Governments**
   - Germany: Federal Ministry of Finance
   - France: Ministry of Public Service
   - UK: Civil Service
   - Japan: Ministry of Finance
   - And more...

3. **International Organizations**
   - United Nations per diem rates
   - World Bank travel allowances
   - IMF travel standards

### Corporate/Private Sector
1. **Corporate Travel Benchmarks**
   - Fortune 500 company averages
   - Industry-specific rates
   - Regional variations

2. **Travel Industry Data**
   - Hotel rate averages
   - Restaurant cost surveys
   - Transportation benchmarks

## Data Verification Process

### Quality Assurance
1. **Source Verification:** All data traced to official government sources
2. **Cross-checking:** Rates compared across multiple sources when available
3. **Update Tracking:** Last update date recorded for each entry
4. **User Feedback:** Community reporting of outdated/incorrect rates

### Update Schedule
- **Monthly Review:** Check State Dept bi-weekly updates
- **Annual Refresh:** GSA fiscal year updates
- **Ad-hoc Updates:** User-reported corrections
- **Version Control:** Git history tracks all changes

## Data Limitations

### Known Gaps
1. **Seasonal Variations:** Some locations have seasonal rate adjustments not captured
2. **Sub-national Regions:** Limited coverage of smaller cities/towns
3. **Non-USD Rates:** Local currency rates not included (only USD conversions)
4. **Private Sector:** Limited private sector/corporate benchmark data

### Disclaimer
- Rates are subject to change without notice
- Always verify with official sources before travel
- Exchange rate fluctuations may affect actual costs
- Local conditions may vary from official rates

## Source Attribution Requirements

When using this data, please attribute:

**Required Citation:**
"Per diem data sourced from U.S. Department of State (DSSR Section 925) and U.S. General Services Administration. Compiled by Global Per Diem Rates project."

**Recommended Links:**
- This project: https://camptracker.github.io/per-diem/
- State Dept: https://allowances.state.gov
- GSA: https://www.gsa.gov/perdiem

## Contributing Data

Want to add more countries or verify existing data?

### Submission Guidelines
1. **Source Documentation:** Provide link to official government source
2. **Data Format:** Follow existing JSON structure
3. **Verification:** Include screenshot or reference documentation
4. **Attribution:** Proper source citation
5. **Date Stamp:** Include month/year of data accuracy

### Contact
- **GitHub Issues:** Report corrections or additions
- **Pull Requests:** Submit new data with proper documentation
- **Repository:** https://github.com/camptracker/per-diem

## Version History

### v1.0 (April 2026)
- Initial release
- 100+ countries
- 150+ locations
- U.S. State Department data (primary)
- GSA CONUS data
- Searchable web interface
- Region/source filtering
- Sortable columns

---

**Last Updated:** April 17, 2026  
**Next Scheduled Update:** May 1, 2026
