#!/bin/bash
# Manual State Dept Data Collection Helper
# Usage: ./manual-state-dept.sh COUNTRY

COUNTRY="$1"

if [ -z "$COUNTRY" ]; then
  echo "Usage: $0 'COUNTRY NAME'"
  echo "Example: $0 'UNITED KINGDOM'"
  exit 1
fi

echo "Fetching per diem data for: $COUNTRY"
echo "URL: https://allowances.state.gov/web920/per_diem.asp"
echo ""
echo "Opening in browser..."
open "https://allowances.state.gov/web920/per_diem.asp"
echo ""
echo "Instructions:"
echo "1. Select '$COUNTRY' from dropdown"
echo "2. Click 'Go'"
echo "3. Copy the table data"
echo "4. I'll parse it into JSON format"
