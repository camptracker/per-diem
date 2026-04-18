#!/usr/bin/env python3
"""
Scrape per diem data for a specific country from US State Department
"""

import sys
import requests
from bs4 import BeautifulSoup
import json

# G7 + G20 country codes
COUNTRIES = {
    '1114': 'UNITED KINGDOM',
    '1089': 'GERMANY',
    '1087': 'FRANCE',
    '1092': 'ITALY',
    '1128': 'JAPAN',
    '1079': 'CANADA',
    '1118': 'AUSTRALIA',
    '1042': 'BRAZIL',
    '1123': 'CHINA',
    '1155': 'INDIA',
    '1127': 'INDONESIA',
    '1059': 'MEXICO',
    '1106': 'RUSSIA',
    '1169': 'SAUDI ARABIA',
    '1233': 'SOUTH AFRICA',
    '1129': 'Korea, South',
    '1111': 'TURKEY',
    '1038': 'ARGENTINA'
}

def fetch_country_data(country_code, country_name):
    """Fetch per diem data for a specific country"""
    url = "https://allowances.state.gov/web920/per_diem_action.asp"
    
    response = requests.post(url, data={'CountryCode': country_code})
    
    if response.status_code != 200:
        print(f"Error fetching {country_name}: HTTP {response.status_code}")
        return []
    
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find all tables
    tables = soup.find_all('table')
    
    cities = []
    
    for table in tables:
        rows = table.find_all('tr')
        
        for row in rows:
            cells = row.find_all('td')
            
            # Skip rows with too few cells
            if len(cells) < 7:
                continue
            
            # Extract text from cells
            cell_texts = [cell.get_text(strip=True) for cell in cells]
            
            # Look for rows with city data (has numbers for lodging/meals)
            if len(cell_texts) >= 7:
                try:
                    # Try to parse as per diem data
                    city = cell_texts[1]
                    lodging_str = cell_texts[4].replace('$', '').replace(',', '')
                    meals_str = cell_texts[5].replace('$', '').replace(',', '')
                    total_str = cell_texts[6].replace('$', '').replace(',', '')
                    
                    if city and lodging_str.isdigit():
                        cities.append({
                            'city': city,
                            'lodging': int(lodging_str),
                            'meals': int(meals_str) if meals_str.isdigit() else 0,
                            'total': int(total_str) if total_str.isdigit() else 0
                        })
                except (ValueError, IndexError):
                    continue
    
    return cities

def main():
    if len(sys.argv) > 1:
        # Fetch specific country
        country_code = sys.argv[1]
        country_name = COUNTRIES.get(country_code, 'Unknown')
        
        print(f"Fetching {country_name}...")
        cities = fetch_country_data(country_code, country_name)
        print(json.dumps(cities, indent=2))
    else:
        # Fetch all G7+G20 countries
        all_data = []
        
        for code, name in COUNTRIES.items():
            print(f"Fetching {name}...", file=sys.stderr)
            cities = fetch_country_data(code, name)
            
            for city in cities:
                all_data.append({
                    'country': name,
                    'city': city['city'],
                    'lodging': city['lodging'],
                    'meals': city['meals'],
                    'total': city['total'],
                    'currency': 'USD',
                    'source': 'US State Dept',
                    'sourceUrl': 'https://allowances.state.gov',
                    'updated': '2026-04',
                    'verifiedDate': '2026-04-18'
                })
            
            print(f"  ✓ Found {len(cities)} cities", file=sys.stderr)
        
        print(json.dumps(all_data, indent=2))

if __name__ == '__main__':
    main()
