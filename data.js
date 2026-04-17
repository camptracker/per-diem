// Global Per Diem Database
// VERIFICATION STATUS: All entries verified from official sources
// Last verification: 2026-04-17

const perDiemData = [
    // ============================================
    // VERIFIED ENTRIES - GSA FY 2026 Rates
    // Source: U.S. General Services Administration
    // Fiscal Year: 2026 (Oct 1, 2025 - Sep 30, 2026)
    // Verified: 2026-04-17 via GSA API
    // ============================================
    
    // Standard CONUS Rate (applies to unlisted locations)
    { country: "United States", region: "north-america", city: "Standard Rate (CONUS)", lodging: 110, meals: 68, total: 178, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    
    // Major US Cities (verified)
    { country: "United States", region: "north-america", city: "Washington, DC", lodging: 234, meals: 92, total: 326, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "New York, NY", lodging: 277, meals: 92, total: 369, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "San Francisco, CA", lodging: 263, meals: 92, total: 355, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "Los Angeles, CA", lodging: 191, meals: 86, total: 277, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "Chicago, IL", lodging: 195, meals: 92, total: 287, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "Boston, MA", lodging: 273, meals: 92, total: 365, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "Seattle, WA", lodging: 208, meals: 92, total: 300, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
    { country: "United States", region: "north-america", city: "Miami, FL", lodging: 177, meals: 92, total: 269, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-10" },
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
        updateFrequency: "Annual (October 1, fiscal year start)",
        verifiedDate: "2026-04-17",
        fiscalYear: 2026
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
    totalEntries: 9,
    verifiedEntries: 9,
    pendingVerification: 0,
    verificationStatus: "VERIFIED - GSA API",
    verificationMethod: "Automated via GSA Per Diem API v2",
    apiKey: "DEMO_KEY",
    notes: "All US domestic (CONUS) rates verified from official GSA API. Foreign countries pending manual verification from State Dept."
};
