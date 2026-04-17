# Global Per Diem Rates - Project Summary

## 🚀 Live Site
**https://camptracker.github.io/per-diem/**

## 📦 What Was Built

A comprehensive, searchable website displaying statutory per diem rates for government and business travel across 100+ countries worldwide.

### Features
✅ **150+ locations** across 100+ countries  
✅ **Real-time search** by country or city  
✅ **Region filtering** (7 geographic regions)  
✅ **Source filtering** (US State Dept, GSA, etc.)  
✅ **Sortable columns** (click any header to sort)  
✅ **Live statistics** (countries, locations, avg rates)  
✅ **Responsive design** (mobile-friendly)  
✅ **Source attribution** with direct links  

## 📊 Database Coverage

### Statistics
- **Total Countries:** 100+
- **Total Locations:** 150+
- **Regions:** North America, South America, Europe, Asia, Africa, Middle East, Oceania
- **Rate Range:** $180 - $599 per day
- **Average Global Rate:** ~$310/day

### Major Locations Included
- **USA:** NYC, SF, LA, DC, Chicago (+ standard CONUS rate)
- **Europe:** London, Paris, Berlin, Rome, Zurich, Geneva, Amsterdam
- **Asia:** Tokyo, Shanghai, Singapore, Hong Kong, Seoul, Mumbai
- **Middle East:** Dubai, Tel Aviv, Riyadh
- **Other:** Toronto, Sydney, São Paulo, Cape Town, and many more

## 📚 Data Sources

### Primary Sources (Currently Used)

1. **U.S. Department of State**
   - Website: https://allowances.state.gov
   - Document: DSSR Section 925
   - Coverage: 195+ countries
   - Update: Bi-weekly
   - All international rates sourced from official State Department data

2. **U.S. General Services Administration (GSA)**
   - Website: https://www.gsa.gov/travel/plan-book/per-diem-rates
   - Coverage: United States (CONUS)
   - Update: Annual (fiscal year)
   - All U.S. domestic rates sourced from GSA

### Data Collected From
Each entry includes:
- Country and city name
- Geographic region
- Lodging rate (USD)
- Meals & Incidental Expenses (USD)
- Total per diem (USD)
- Source attribution with URL
- Last updated date

## 🛠 Technical Stack

- **Pure HTML/CSS/JavaScript** (no frameworks)
- **GitHub Pages** for hosting
- **Responsive design** (mobile-first)
- **Search/filter/sort** functionality
- **Modular architecture** (separate data.js for easy updates)

### File Structure
```
per-diem/
├── index.html          # Main HTML structure
├── app.js              # Application logic (search, filter, sort)
├── data.js             # Per diem database
├── README.md           # User documentation
├── DATA_SOURCES.md     # Detailed source documentation
└── PROJECT_SUMMARY.md  # This file
```

## 📁 Repository

**GitHub:** https://github.com/camptracker/per-diem

### What's Included
- ✅ Complete source code
- ✅ Comprehensive README
- ✅ Detailed data source documentation
- ✅ Version-controlled via Git
- ✅ Auto-deployed via GitHub Pages

## 🎯 Use Cases

1. **Government Travel Planning**
   - Official rates for federal employees
   - Budget forecasting for international assignments

2. **Business Travel**
   - Corporate travel expense budgeting
   - Reimbursement rate benchmarks

3. **Travel Research**
   - Cost-of-living comparisons
   - Destination affordability analysis

4. **Policy Development**
   - Reference data for corporate travel policies
   - Benchmarking against government standards

## 🔄 Future Enhancements (Potential)

### Data Expansion
- [ ] Add more countries (target: all 195+ UN-recognized countries)
- [ ] Include seasonal rate variations
- [ ] Add more cities per country
- [ ] National government per diem rates (non-US)
- [ ] EU civil service standards
- [ ] Private sector benchmarks

### Features
- [ ] CSV export functionality
- [ ] Historical rate trends/charts
- [ ] Currency converter
- [ ] Compare multiple locations
- [ ] Dark mode
- [ ] API endpoint for programmatic access

### Automation
- [ ] Automated data scraping/updates
- [ ] GitHub Actions for monthly refresh
- [ ] Change notification system
- [ ] Rate increase/decrease alerts

## 📝 Documentation

### User Documentation
- **README.md:** Complete user guide with features, use cases, disclaimer
- **Live site footer:** Source attribution and update information
- **Inline tooltips:** (Future) Explanations of per diem components

### Technical Documentation
- **DATA_SOURCES.md:** Comprehensive source documentation
  - Data collection methodology
  - Source verification process
  - Update schedule
  - Coverage statistics
  - Future source roadmap

## ⚠️ Important Notes

### Disclaimer
The site includes proper disclaimers:
- Rates are subject to change without notice
- Always verify with official sources before travel
- Site is for informational purposes only
- Not responsible for inaccuracies or rate changes

### Data Accuracy
- All rates sourced from official government websites
- Updated as of April 2026
- Cross-referenced where possible
- Monthly update schedule planned

## 🚢 Deployment

### Status: ✅ LIVE
- **URL:** https://camptracker.github.io/per-diem/
- **Deployed:** April 17, 2026
- **Build Status:** GitHub Pages active
- **HTTPS:** Enforced
- **Visibility:** Public

### Auto-Deploy
GitHub Pages automatically rebuilds on every push to `main` branch.

**Deployment time:** 1-2 minutes after push

## 📈 Next Steps

1. **Monitor Traffic:** Track usage via GitHub Pages insights
2. **Gather Feedback:** Community input on missing countries/features
3. **Expand Data:** Add more countries and sources
4. **Enhance Features:** Implement CSV export, charts, comparisons
5. **Automate Updates:** Set up monthly data refresh pipeline

## 🎉 Success Criteria Met

✅ Comprehensive per diem database created  
✅ 100+ countries covered  
✅ Official government sources documented  
✅ Searchable, filterable, sortable interface  
✅ GitHub repository created and public  
✅ Website deployed and live  
✅ Mobile-responsive design  
✅ Proper source attribution  
✅ Complete documentation  

---

**Project Completed:** April 17, 2026  
**Repository:** https://github.com/camptracker/per-diem  
**Live Site:** https://camptracker.github.io/per-diem/  
**Status:** ✅ Deployed and operational
