#!/bin/bash
# Scrape all G7+G20 countries from US State Department
# Uses curl + basic text processing

OUTPUT_FILE="../verified-data/state-dept-g20-$(date +%Y-%m-%d).json"

# Country codes (from State Dept dropdown)
declare -A COUNTRIES
COUNTRIES[1114]="UNITED KINGDOM"
COUNTRIES[1089]="GERMANY"
COUNTRIES[1087]="FRANCE"
COUNTRIES[1092]="ITALY"
COUNTRIES[1128]="JAPAN"
COUNTRIES[1079]="CANADA"
COUNTRIES[1118]="AUSTRALIA"
COUNTRIES[1042]="BRAZIL"
COUNTRIES[1123]="CHINA"
COUNTRIES[1155]="INDIA"
COUNTRIES[1127]="INDONESIA"
COUNTRIES[1059]="MEXICO"
COUNTRIES[1106]="RUSSIA"
COUNTRIES[1169]="SAUDI ARABIA"
COUNTRIES[1233]="SOUTH AFRICA"
COUNTRIES[1129]="Korea, South"
COUNTRIES[1111]="TURKEY"
COUNTRIES[1038]="ARGENTINA"

echo "🌍 Scraping G7+G20 Per Diem Data from US State Department"
echo ""

# Start JSON array
echo "[" > "$OUTPUT_FILE"

FIRST=true

for CODE in "${!COUNTRIES[@]}"; do
    COUNTRY="${COUNTRIES[$CODE]}"
    echo "📍 Fetching $COUNTRY..."
    
    # Fetch HTML
    HTML=$(curl -s -X POST "https://allowances.state.gov/web920/per_diem_action.asp" \
        -H "Content-Type: application/x-www-form-urlencoded" \
        -d "CountryCode=${CODE}")
    
    # Save HTML for debugging
    echo "$HTML" > "/tmp/state-dept-${CODE}.html"
    
    # Extract city names and rates (basic pattern matching)
    # This will need manual verification but gives us a starting point
    
    # Count how many cities found
    CITY_COUNT=$(echo "$HTML" | grep -o "<td.*>.*</td>" | wc -l)
    
    echo "  → Downloaded HTML ($CITY_COUNT table cells)"
    
    # Add comma if not first
    if [ "$FIRST" = false ]; then
        echo "," >> "$OUTPUT_FILE"
    fi
    FIRST=false
    
    # Add placeholder entry (we'll manually fill these)
    cat >> "$OUTPUT_FILE" << EOF
  {
    "country": "$COUNTRY",
    "status": "downloaded",
    "html_file": "/tmp/state-dept-${CODE}.html",
    "note": "Manual parsing needed"
  }
EOF
    
    sleep 2  # Be polite to the server
done

# Close JSON array
echo "" >> "$OUTPUT_FILE"
echo "]" >> "$OUTPUT_FILE"

echo ""
echo "✅ Done! Downloaded HTML for ${#COUNTRIES[@]} countries"
echo "📁 Metadata saved to: $OUTPUT_FILE"
echo ""
echo "📝 Next step: Manually parse HTML files in /tmp/state-dept-*.html"
echo "   Each file contains the per diem table for one country"
