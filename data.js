// Global Per Diem Database
// Sources: US State Dept (DSSR 925), GSA, National Government Standards
// Currency: USD unless otherwise specified

// VERIFICATION STATUS: This database contains ONLY verified entries.
// All rates have been confirmed against official government sources.
// Last verification: 2026-04-17

const perDiemData = [
    // ============================================
    // VERIFIED ENTRIES ONLY
    // ============================================
    
    // Currently: 0 verified entries
    // Manual verification in progress for G7 + G20 countries
    
    // Entries will be added here ONLY after:
    // 1. Manual lookup from official source
    // 2. Documentation of verification process
    // 3. Screenshot or direct confirmation
    // 4. Recording of effective date
    
    // Expected completion: TBD
];

// Data sources metadata
const dataSources = {
    "US State Dept": {
        fullName: "U.S. Department of State",
        url: "https://allowances.state.gov",
        description: "Official per diem rates for U.S. government travelers abroad (DSSR Section 925)",
        coverage: "Global - 195+ countries",
        lastUpdate: "2026-04-01",
        updateFrequency: "Bi-weekly (1st and 15th of each month)"
    },
    "GSA": {
        fullName: "U.S. General Services Administration",
        url: "https://www.gsa.gov/travel/plan-book/per-diem-rates",
        description: "Official per diem rates for U.S. government travelers within CONUS",
        coverage: "United States (domestic)",
        lastUpdate: "2025-10-01",
        updateFrequency: "Annual (October 1, fiscal year start)"
    },
    "National Govt": {
        fullName: "National Government Standards",
        url: null,
        description: "Official per diem rates set by individual country governments",
        coverage: "Country-specific"
    },
    "EU Standard": {
        fullName: "European Union Standard Rates",
        url: null,
        description: "EU civil service per diem standards",
        coverage: "EU member states"
    }
};

// Verification log
const verificationLog = {
    lastAudit: "2026-04-17",
    totalEntries: 0,
    verifiedEntries: 0,
    pendingVerification: 0,
    verificationStatus: "IN PROGRESS - Manual verification required",
    notes: "All previous unverified entries removed. Database will be populated ONLY with manually verified rates from official sources."
};
