// Global Per Diem Database
// Sources: US State Dept (DSSR 925), GSA, National Government Standards
// Currency: USD unless otherwise specified

const perDiemData = [
    // United States (GSA rates)
    { country: "United States", region: "north-america", city: "Washington, DC", lodging: 224, meals: 79, total: 303, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-04" },
    { country: "United States", region: "north-america", city: "New York, NY", lodging: 296, meals: 79, total: 375, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-04" },
    { country: "United States", region: "north-america", city: "San Francisco, CA", lodging: 296, meals: 79, total: 375, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-04" },
    { country: "United States", region: "north-america", city: "Los Angeles, CA", lodging: 165, meals: 79, total: 244, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-04" },
    { country: "United States", region: "north-america", city: "Chicago, IL", lodging: 184, meals: 79, total: 263, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-04" },
    { country: "United States", region: "north-america", city: "Standard Rate", lodging: 107, meals: 68, total: 175, currency: "USD", source: "GSA", sourceUrl: "https://www.gsa.gov/travel/plan-book/per-diem-rates", updated: "2026-04" },
    
    // United Kingdom
    { country: "United Kingdom", region: "europe", city: "London", lodging: 285, meals: 141, total: 426, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "United Kingdom", region: "europe", city: "Edinburgh", lodging: 196, meals: 125, total: 321, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "United Kingdom", region: "europe", city: "Manchester", lodging: 146, meals: 115, total: 261, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Germany
    { country: "Germany", region: "europe", city: "Berlin", lodging: 198, meals: 125, total: 323, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Germany", region: "europe", city: "Munich", lodging: 224, meals: 133, total: 357, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Germany", region: "europe", city: "Frankfurt", lodging: 182, meals: 121, total: 303, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Germany", region: "europe", city: "Hamburg", lodging: 165, meals: 118, total: 283, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // France
    { country: "France", region: "europe", city: "Paris", lodging: 301, meals: 157, total: 458, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "France", region: "europe", city: "Lyon", lodging: 165, meals: 119, total: 284, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "France", region: "europe", city: "Marseille", lodging: 148, meals: 112, total: 260, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "France", region: "europe", city: "Nice", lodging: 195, meals: 128, total: 323, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Japan
    { country: "Japan", region: "asia", city: "Tokyo", lodging: 286, meals: 168, total: 454, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Japan", region: "asia", city: "Osaka", lodging: 194, meals: 142, total: 336, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Japan", region: "asia", city: "Kyoto", lodging: 178, meals: 134, total: 312, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Japan", region: "asia", city: "Yokohama", lodging: 215, meals: 151, total: 366, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // China
    { country: "China", region: "asia", city: "Beijing", lodging: 285, meals: 133, total: 418, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "China", region: "asia", city: "Shanghai", lodging: 298, meals: 141, total: 439, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "China", region: "asia", city: "Guangzhou", lodging: 176, meals: 112, total: 288, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "China", region: "asia", city: "Shenzhen", lodging: 188, meals: 118, total: 306, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "China", region: "asia", city: "Hong Kong", lodging: 341, meals: 157, total: 498, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Switzerland
    { country: "Switzerland", region: "europe", city: "Geneva", lodging: 398, meals: 201, total: 599, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Switzerland", region: "europe", city: "Zurich", lodging: 382, meals: 194, total: 576, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Switzerland", region: "europe", city: "Bern", lodging: 285, meals: 165, total: 450, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Singapore
    { country: "Singapore", region: "asia", city: "Singapore", lodging: 309, meals: 161, total: 470, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Australia
    { country: "Australia", region: "oceania", city: "Sydney", lodging: 264, meals: 151, total: 415, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Australia", region: "oceania", city: "Melbourne", lodging: 228, meals: 139, total: 367, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Australia", region: "oceania", city: "Brisbane", lodging: 196, meals: 128, total: 324, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Australia", region: "oceania", city: "Perth", lodging: 182, meals: 122, total: 304, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Canada
    { country: "Canada", region: "north-america", city: "Toronto", lodging: 215, meals: 118, total: 333, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Canada", region: "north-america", city: "Vancouver", lodging: 224, meals: 125, total: 349, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Canada", region: "north-america", city: "Montreal", lodging: 185, meals: 112, total: 297, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Canada", region: "north-america", city: "Ottawa", lodging: 195, meals: 115, total: 310, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Italy
    { country: "Italy", region: "europe", city: "Rome", lodging: 265, meals: 148, total: 413, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Italy", region: "europe", city: "Milan", lodging: 278, meals: 154, total: 432, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Italy", region: "europe", city: "Venice", lodging: 242, meals: 138, total: 380, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Italy", region: "europe", city: "Florence", lodging: 218, meals: 131, total: 349, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Spain
    { country: "Spain", region: "europe", city: "Madrid", lodging: 185, meals: 124, total: 309, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Spain", region: "europe", city: "Barcelona", lodging: 208, meals: 131, total: 339, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Spain", region: "europe", city: "Seville", lodging: 155, meals: 108, total: 263, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Netherlands
    { country: "Netherlands", region: "europe", city: "Amsterdam", lodging: 268, meals: 145, total: 413, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Netherlands", region: "europe", city: "Rotterdam", lodging: 178, meals: 121, total: 299, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Netherlands", region: "europe", city: "The Hague", lodging: 195, meals: 128, total: 323, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // United Arab Emirates
    { country: "United Arab Emirates", region: "middle-east", city: "Dubai", lodging: 332, meals: 175, total: 507, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "United Arab Emirates", region: "middle-east", city: "Abu Dhabi", lodging: 298, meals: 165, total: 463, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // India
    { country: "India", region: "asia", city: "New Delhi", lodging: 185, meals: 104, total: 289, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "India", region: "asia", city: "Mumbai", lodging: 224, meals: 118, total: 342, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "India", region: "asia", city: "Bangalore", lodging: 178, meals: 98, total: 276, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "India", region: "asia", city: "Hyderabad", lodging: 145, meals: 89, total: 234, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // South Korea
    { country: "South Korea", region: "asia", city: "Seoul", lodging: 242, meals: 142, total: 384, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "South Korea", region: "asia", city: "Busan", lodging: 165, meals: 115, total: 280, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Brazil
    { country: "Brazil", region: "south-america", city: "São Paulo", lodging: 185, meals: 112, total: 297, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Brazil", region: "south-america", city: "Rio de Janeiro", lodging: 205, meals: 121, total: 326, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Brazil", region: "south-america", city: "Brasília", lodging: 155, meals: 98, total: 253, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Mexico
    { country: "Mexico", region: "north-america", city: "Mexico City", lodging: 165, meals: 105, total: 270, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Mexico", region: "north-america", city: "Guadalajara", lodging: 125, meals: 88, total: 213, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Mexico", region: "north-america", city: "Monterrey", lodging: 135, meals: 92, total: 227, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Mexico", region: "north-america", city: "Cancún", lodging: 175, meals: 98, total: 273, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Russia
    { country: "Russia", region: "europe", city: "Moscow", lodging: 298, meals: 145, total: 443, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Russia", region: "europe", city: "St. Petersburg", lodging: 228, meals: 128, total: 356, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Saudi Arabia
    { country: "Saudi Arabia", region: "middle-east", city: "Riyadh", lodging: 265, meals: 145, total: 410, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Saudi Arabia", region: "middle-east", city: "Jeddah", lodging: 242, meals: 135, total: 377, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // South Africa
    { country: "South Africa", region: "africa", city: "Johannesburg", lodging: 165, meals: 102, total: 267, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "South Africa", region: "africa", city: "Cape Town", lodging: 188, meals: 112, total: 300, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "South Africa", region: "africa", city: "Durban", lodging: 145, meals: 95, total: 240, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Argentina
    { country: "Argentina", region: "south-america", city: "Buenos Aires", lodging: 155, meals: 98, total: 253, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Belgium
    { country: "Belgium", region: "europe", city: "Brussels", lodging: 242, meals: 138, total: 380, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Belgium", region: "europe", city: "Antwerp", lodging: 175, meals: 118, total: 293, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Austria
    { country: "Austria", region: "europe", city: "Vienna", lodging: 228, meals: 135, total: 363, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Austria", region: "europe", city: "Salzburg", lodging: 185, meals: 121, total: 306, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Sweden
    { country: "Sweden", region: "europe", city: "Stockholm", lodging: 265, meals: 148, total: 413, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Sweden", region: "europe", city: "Gothenburg", lodging: 195, meals: 125, total: 320, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Denmark
    { country: "Denmark", region: "europe", city: "Copenhagen", lodging: 285, meals: 158, total: 443, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Norway
    { country: "Norway", region: "europe", city: "Oslo", lodging: 325, meals: 172, total: 497, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Norway", region: "europe", city: "Bergen", lodging: 242, meals: 145, total: 387, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Finland
    { country: "Finland", region: "europe", city: "Helsinki", lodging: 228, meals: 138, total: 366, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Poland
    { country: "Poland", region: "europe", city: "Warsaw", lodging: 165, meals: 105, total: 270, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Poland", region: "europe", city: "Krakow", lodging: 145, meals: 95, total: 240, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Turkey
    { country: "Turkey", region: "europe", city: "Istanbul", lodging: 195, meals: 112, total: 307, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Turkey", region: "europe", city: "Ankara", lodging: 155, meals: 98, total: 253, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Greece
    { country: "Greece", region: "europe", city: "Athens", lodging: 185, meals: 115, total: 300, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Greece", region: "europe", city: "Thessaloniki", lodging: 145, meals: 98, total: 243, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Portugal
    { country: "Portugal", region: "europe", city: "Lisbon", lodging: 175, meals: 112, total: 287, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Portugal", region: "europe", city: "Porto", lodging: 145, meals: 98, total: 243, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Ireland
    { country: "Ireland", region: "europe", city: "Dublin", lodging: 242, meals: 135, total: 377, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Czech Republic
    { country: "Czech Republic", region: "europe", city: "Prague", lodging: 178, meals: 108, total: 286, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Thailand
    { country: "Thailand", region: "asia", city: "Bangkok", lodging: 165, meals: 98, total: 263, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Thailand", region: "asia", city: "Chiang Mai", lodging: 105, meals: 75, total: 180, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Thailand", region: "asia", city: "Phuket", lodging: 135, meals: 85, total: 220, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Vietnam
    { country: "Vietnam", region: "asia", city: "Ho Chi Minh City", lodging: 145, meals: 88, total: 233, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Vietnam", region: "asia", city: "Hanoi", lodging: 135, meals: 82, total: 217, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Malaysia
    { country: "Malaysia", region: "asia", city: "Kuala Lumpur", lodging: 125, meals: 82, total: 207, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Indonesia
    { country: "Indonesia", region: "asia", city: "Jakarta", lodging: 155, meals: 92, total: 247, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Indonesia", region: "asia", city: "Bali", lodging: 135, meals: 85, total: 220, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Philippines
    { country: "Philippines", region: "asia", city: "Manila", lodging: 145, meals: 88, total: 233, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // New Zealand
    { country: "New Zealand", region: "oceania", city: "Auckland", lodging: 195, meals: 125, total: 320, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "New Zealand", region: "oceania", city: "Wellington", lodging: 178, meals: 115, total: 293, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Egypt
    { country: "Egypt", region: "africa", city: "Cairo", lodging: 165, meals: 95, total: 260, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Egypt", region: "africa", city: "Alexandria", lodging: 135, meals: 82, total: 217, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Israel
    { country: "Israel", region: "middle-east", city: "Tel Aviv", lodging: 285, meals: 148, total: 433, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Israel", region: "middle-east", city: "Jerusalem", lodging: 252, meals: 138, total: 390, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Chile
    { country: "Chile", region: "south-america", city: "Santiago", lodging: 175, meals: 105, total: 280, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Colombia
    { country: "Colombia", region: "south-america", city: "Bogotá", lodging: 145, meals: 92, total: 237, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Colombia", region: "south-america", city: "Medellín", lodging: 125, meals: 82, total: 207, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Peru
    { country: "Peru", region: "south-america", city: "Lima", lodging: 155, meals: 95, total: 250, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Kenya
    { country: "Kenya", region: "africa", city: "Nairobi", lodging: 185, meals: 105, total: 290, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Nigeria
    { country: "Nigeria", region: "africa", city: "Lagos", lodging: 228, meals: 118, total: 346, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Nigeria", region: "africa", city: "Abuja", lodging: 195, meals: 108, total: 303, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    
    // Morocco
    { country: "Morocco", region: "africa", city: "Casablanca", lodging: 145, meals: 88, total: 233, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
    { country: "Morocco", region: "africa", city: "Marrakech", lodging: 135, meals: 82, total: 217, currency: "USD", source: "US State Dept", sourceUrl: "https://allowances.state.gov", updated: "2026-04" },
];

// Data sources metadata
const dataSources = {
    "US State Dept": {
        fullName: "U.S. Department of State",
        url: "https://allowances.state.gov",
        description: "Official per diem rates for U.S. government travelers abroad (DSSR Section 925)",
        coverage: "Global - 195+ countries"
    },
    "GSA": {
        fullName: "U.S. General Services Administration",
        url: "https://www.gsa.gov/travel/plan-book/per-diem-rates",
        description: "Official per diem rates for U.S. government travelers within CONUS",
        coverage: "United States (domestic)"
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
