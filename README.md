# Global Per Diem Rates

A comprehensive, searchable database of statutory per diem rates for government and business travel worldwide.

## 🌍 Live Site

**https://camptracker.github.io/per-diem/**

## ⚠️ CURRENT STATUS: VERIFICATION IN PROGRESS

**Important:** All previous unverified data has been removed. 

We are manually verifying every per diem rate from official government sources. **Only confirmed, verified entries are displayed.**

**Current progress:**
- ✅ Verification framework established
- 🔍 G7 + G20 countries in progress
- 📊 Verified entries: 0 (manual verification underway)

Check back soon for verified data!

## 📊 Data Sources

### U.S. Department of State (Primary Source)
- **Website:** https://allowances.state.gov
- **Document:** DSSR Section 925 - Foreign Per Diem Rates
- **Coverage:** 195+ countries and territories
- **Update Frequency:** Bi-weekly
- **Description:** Official maximum per diem rates for U.S. government civilian employees on foreign assignment
- **Components:**
  - Maximum lodging rate
  - Meals & Incidental Expenses (M&IE)
  - Total per diem (lodging + M&IE)

### U.S. General Services Administration (GSA)
- **Website:** https://www.gsa.gov/travel/plan-book/per-diem-rates
- **Coverage:** United States (domestic/CONUS)
- **Update Frequency:** Annual (fiscal year)
- **Description:** Official per diem rates for U.S. government travelers within the continental United States
- **Data includes:**
  - City-specific rates for high-cost areas
  - Standard CONUS rate for unlisted locations

### Additional Sources (Planned)
- **European Commission:** EU civil service per diem standards
- **National Governments:** Country-specific statutory rates
- **Private Sector:** Corporate travel benchmarks

## 📋 Data Coverage

### Current Status
- **Countries:** 100+ (as of April 2026)
- **Locations:** 150+ cities worldwide
- **Regions:**
  - North America
  - South America
  - Europe
  - Asia
  - Africa
  - Middle East
  - Oceania

### Major Cities Included
- **United States:** NYC, SF, LA, DC, Chicago, Boston, Seattle
- **Europe:** London, Paris, Berlin, Rome, Amsterdam, Zurich
- **Asia:** Tokyo, Shanghai, Singapore, Hong Kong, Seoul
- **Middle East:** Dubai, Tel Aviv, Riyadh
- **And many more...**

## 🛠 Features

- **🔍 Real-time Search:** Filter by country or city name
- **🌎 Region Filter:** Browse by geographic region
- **📑 Source Filter:** View rates by data source
- **⬆️ Sortable Columns:** Sort by any column (country, location, rates)
- **📊 Live Statistics:** Countries, locations, and average rates
- **📱 Responsive Design:** Works on desktop, tablet, and mobile
- **💾 CSV Export:** Download filtered data (coming soon)

## 💡 Use Cases

- **Government Travel:** Official per diem rates for federal employees
- **Business Travel:** Corporate travel budget planning
- **Expense Reimbursement:** Reference rates for travel claims
- **Travel Planning:** Cost-of-living comparison across cities
- **Policy Development:** Benchmark data for travel policies

## 📖 Understanding Per Diem

**Per Diem** (Latin for "per day") is a daily allowance paid to employees or government officials to cover expenses while traveling for work.

### Components

1. **Lodging:** Maximum reimbursable hotel/accommodation cost
2. **Meals & Incidental Expenses (M&IE):**
   - Breakfast, lunch, dinner
   - Tips and service fees
   - Minor incidental costs

3. **Total Per Diem:** Sum of lodging + M&IE

### Important Notes

- Rates are **maximums** - actual reimbursement may be lower
- Rates vary by location within countries
- Seasonal adjustments may apply
- Exchange rates fluctuate - verify current conversions
- Always check official sources before travel

## 🔄 Update Schedule

- **U.S. State Department:** Updated bi-weekly (1st and 15th of each month)
- **GSA (CONUS):** Updated annually (October 1, fiscal year start)
- **This Database:** Monthly refresh (target: 1st of each month)

## ⚠️ Disclaimer

This site compiles per diem data from official government sources for informational purposes only. Rates are subject to change without notice.

**Always verify rates with official sources before travel:**
- U.S. travelers: https://allowances.state.gov
- GSA rates: https://www.gsa.gov/perdiem

The maintainers of this site are not responsible for inaccuracies or changes in official rates.

## 🤝 Contributing

Want to add more countries or data sources? Contributions welcome!

1. Fork this repository
2. Add data to `data.js` with proper source attribution
3. Submit a pull request with source verification

### Data Format

```javascript
{
    country: "Country Name",
    region: "europe|asia|africa|north-america|south-america|oceania|middle-east",
    city: "City Name",
    lodging: 200,  // USD
    meals: 120,    // USD (M&IE)
    total: 320,    // USD (lodging + meals)
    currency: "USD",
    source: "Source Name",
    sourceUrl: "https://official-source.gov",
    updated: "YYYY-MM"
}
```

## 📜 License

Data is sourced from public government documents. Site code is MIT licensed.

## 🔗 Links

- **Live Site:** https://camptracker.github.io/per-diem/
- **Repository:** https://github.com/camptracker/per-diem
- **Issues:** Report bugs or request features via GitHub Issues

---

**Built with ❤️ for travelers worldwide**
