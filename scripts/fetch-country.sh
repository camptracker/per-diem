#!/bin/bash
# Fetch per diem data for a country from State Dept
COUNTRY_CODE="$1"
COUNTRY_NAME="$2"

if [ -z "$COUNTRY_CODE" ]; then
  echo "Usage: $0 COUNTRY_CODE COUNTRY_NAME"
  exit 1
fi

TEMP_FILE="/tmp/state-dept-${COUNTRY_CODE}.html"

curl -s -X POST "https://allowances.state.gov/web920/per_diem_action.asp" \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "CountryCode=${COUNTRY_CODE}" \
  > "$TEMP_FILE"

echo "Fetched data for $COUNTRY_NAME (code: $COUNTRY_CODE)"
echo "Saved to: $TEMP_FILE"
echo ""
echo "Sample data:"
grep -A 1 "<td>" "$TEMP_FILE" | grep -v "script\|function\|style\|BGCOLOR\|colspan" | head -30
