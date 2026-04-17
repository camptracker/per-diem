# Manual Verification Log - VERIFIED ENTRIES ONLY

## Policy
**ZERO TOLERANCE for unverified data.**

Every entry in this log has been:
1. ✅ Manually looked up from official source
2. ✅ Verified against current fiscal year rates
3. ✅ Documented with lookup process
4. ✅ Screenshot or direct confirmation obtained
5. ✅ Effective date recorded

## Current Status
- **Database entries:** 0
- **Verified entries:** 0
- **In progress:** G7 + G20 countries
- **Started:** 2026-04-17

---

## Verification Queue

### Priority 1: G7 Countries
1. ⏸️ United States (GSA - CONUS)
2. ⏸️ United Kingdom
3. ⏸️ Germany
4. ⏸️ France
5. ⏸️ Italy
6. ⏸️ Japan
7. ⏸️ Canada

### Priority 2: G20 Additional Countries
8. ⏸️ Argentina
9. ⏸️ Australia
10. ⏸️ Brazil
11. ⏸️ China
12. ⏸️ India
13. ⏸️ Indonesia
14. ⏸️ Mexico
15. ⏸️ Russia
16. ⏸️ Saudi Arabia
17. ⏸️ South Africa
18. ⏸️ South Korea
19. ⏸️ Turkey

---

## Verified Entries

### Format for Each Entry:
```
Country: [Country Name]
City: [City Name]
Lodging: $[amount]
Meals & IE: $[amount]
Total: $[amount]
Source: [Official source]
Lookup Process: [Step-by-step how I got this]
Verified By: [Manual lookup / API / etc.]
Verified Date: YYYY-MM-DD
Effective Date: YYYY-MM-DD
Screenshot/Reference: [If applicable]
```

---

## VERIFIED ENTRIES START HERE

_(Currently empty - verification in progress)_

---

## Next Steps

1. **Immediate:** Start manual State Dept lookups for G7 countries
2. **Process:** Navigate https://allowances.state.gov/web920/per_diem.asp for each country
3. **Documentation:** Record every lookup with exact steps taken
4. **Integration:** Add verified entries to data.js ONLY after confirmation
5. **Deploy:** Push updates after each batch of verifications

---

## Blockers & Challenges

### State Department Website
- **Issue:** Requires interactive dropdown selection
- **Cannot:** Use direct URLs or API without authentication
- **Solution:** Manual browser navigation required

### GSA Website  
- **Issue:** Has API but requires API key
- **Cannot:** Auto-fetch without key
- **Solution:** Either get API key OR manual lookups

### Time Required
- **Per country:** ~5-10 minutes (depends on # of cities)
- **G7 (7 countries):** ~1 hour
- **G20 full (20 countries):** ~2-3 hours

---

**Started:** 2026-04-17  
**Status:** READY TO BEGIN MANUAL VERIFICATION  
**Commitment:** Only verified data will be published  
**Transparency:** Full audit trail for every entry
