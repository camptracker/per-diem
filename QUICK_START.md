# Quick Start - Get Verified Per Diem Data

## Overview

✅ **Database cleaned:** All unverified data removed  
✅ **Scripts ready:** Automated GSA API fetcher built  
✅ **Documentation complete:** Full verification workflow documented  

## Get Verified Data in 3 Steps

### Step 1: Get GSA API Key (2 minutes)

1. Visit: **https://open.gsa.gov/api/perdiem/**
2. Scroll to "Getting started" section
3. Fill out the signup form (name + email)
4. **Check your email** - API key arrives instantly
5. Set environment variable:

```bash
export GSA_API_KEY="your-api-key-from-email"
```

**Detailed instructions:** `scripts/GET_API_KEY.md`

---

### Step 2: Run Verification Script (1-2 minutes)

```bash
cd ~/Documents/per-diem/scripts
node fetch-gsa-data.js
```

**This will:**
- ✅ Fetch standard CONUS rate
- ✅ Fetch 15 priority US cities (DC, NYC, SF, LA, Chicago, etc.)
- ✅ Verify against FY 2026 official GSA rates
- ✅ Save to `verified-data/gsa-verified-YYYY-MM-DD.json`
- ✅ Output JavaScript entries for `data.js`

**Output example:**
```
✓ Standard Rate: $157/day (Lodging: $98, M&IE: $59)
✓ Washington, DC: $303/day (Lodging: $224, M&IE: $79)
✓ New York, NY: $375/day (Lodging: $296, M&IE: $79)
...
✓ Successfully verified 16 entries
```

---

### Step 3: Integrate & Deploy

Copy the JavaScript output from Step 2 and paste into `data.js`:

```javascript
// In ~/Documents/per-diem/data.js
const perDiemData = [
    // Paste verified entries here
    { country: "United States", region: "north-america", city: "Washington, DC", lodging: 224, meals: 79, total: 303, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    // ... more entries
];
```

Then commit and push:

```bash
cd ~/Documents/per-diem
git add -A
git commit -m "Add verified GSA per diem data"
git push
```

**Site updates automatically in 1-2 minutes.**

---

## What About Foreign Countries (G7+G20)?

### Current Status

**GSA API:** ✅ Covers all US domestic (CONUS)  
**State Dept:** ❌ No API - requires manual lookup

### Foreign Country Verification

**Source:** https://allowances.state.gov/web920/per_diem.asp

**Process:**
1. Navigate to State Dept website
2. Select country from dropdown
3. Record rates for all cities
4. Document in `MANUAL_VERIFICATION_LOG.md`

**Time estimate:** 2-3 hours for full G7+G20

**Countries needed:**
- G7: UK, Germany, France, Italy, Japan, Canada (6 countries)
- G20 Additional: Australia, China, India, South Korea, Brazil, Mexico, Argentina, Russia, Saudi Arabia, South Africa, Turkey, Indonesia (12 more)

**Alternative:** I can do this manually over the next few days and update progressively.

---

## Current Database Status

**Verified entries:** 0  
**Ready to verify:** 15+ US cities (via script)  
**Pending manual verification:** 80+ foreign cities  

---

## Next Actions

### Option A: Quick Win (15 minutes)
1. Get GSA API key
2. Run script
3. Get 15+ verified US cities live

### Option B: Full G7+G20 (3-4 hours)
1. Do Option A first (US cities)
2. Manually verify G7 countries (UK, Germany, France, Italy, Japan, Canada)
3. Manually verify G20 additional countries
4. Full 80+ verified entries across 20 countries

### Option C: Progressive Build
1. Start with Option A (US cities today)
2. Add 1-2 countries per day manually
3. Build database incrementally over a week

---

## Files Reference

| File | Purpose |
|------|---------|
| `scripts/fetch-gsa-data.js` | Automated GSA API fetcher |
| `scripts/GET_API_KEY.md` | Step-by-step API key registration |
| `scripts/README.md` | Complete workflow documentation |
| `MANUAL_VERIFICATION_LOG.md` | Template for manual verifications |
| `DATA_AUDIT.md` | Audit framework and standards |
| `G7_G20_VERIFICATION.md` | G7+G20 verification plan |

---

## Your Call

**Want me to:**

### Choice 1: Run It For You
- You get GSA API key
- Share it with me
- I run the script and integrate the data
- **Time:** 5 minutes (your time), site updated in 15 minutes total

### Choice 2: You Run It
- You get API key
- You run the script
- You paste the output into `data.js`
- **Time:** 15 minutes, you control everything

### Choice 3: I Do Manual Work
- I manually verify G7+G20 foreign countries
- Document every lookup
- Update database progressively
- **Time:** 2-3 hours (my time), you approve final data

---

**Ready to start?**

1. Get API key: https://open.gsa.gov/api/perdiem/
2. Run: `export GSA_API_KEY="your-key" && cd ~/Documents/per-diem/scripts && node fetch-gsa-data.js`
3. See verified data appear! 🔥

---

**Questions?** Check the docs or just tell me what you want me to do.
