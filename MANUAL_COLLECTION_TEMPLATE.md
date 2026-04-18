# Manual Per Diem Collection - G7+G20 Countries

**Source:** https://allowances.state.gov/web920/per_diem.asp

## Instructions
1. Open URL in browser
2. Select country from dropdown
3. Click "Go"
4. Copy table data
5. Paste below in format: `City | Lodging | Meals | Total`

## Progress Tracker

### G7 Countries

#### ✅ United States
- Status: COMPLETE (346 cities via GSA API)

#### ⏸️ United Kingdom
**Code:** 1114  
**Cities to collect:** London, Edinburgh, Manchester, Birmingham, Glasgow

```
London | $XXX | $XX | $XXX
Edinburgh | $XXX | $XX | $XXX
...
```

#### ⏸️ Germany
**Code:** 1089  
**Cities to collect:** Berlin, Munich, Frankfurt, Hamburg, Cologne

```
Berlin | $XXX | $XX | $XXX
...
```

#### ⏸️ France
**Code:** 1087  
**Cities to collect:** Paris, Lyon, Marseille, Toulouse, Nice

```
Paris | $XXX | $XX | $XXX
...
```

#### ⏸️ Italy
**Code:** 1092  
**Cities to collect:** Rome, Milan, Florence, Venice, Naples

```
Rome | $XXX | $XX | $XXX
...
```

#### ⏸️ Japan
**Code:** 1128  
**Cities to collect:** Tokyo, Osaka, Kyoto, Yokohama, Nagoya

```
Tokyo | $XXX | $XX | $XXX
...
```

#### ⏸️ Canada
**Code:** 1079  
**Cities to collect:** Toronto, Vancouver, Montreal, Ottawa, Calgary

```
Toronto | $XXX | $XX | $XXX
...
```

### G20 Additional Countries

#### ⏸️ Australia
**Code:** 1118  
**Cities to collect:** Sydney, Melbourne, Brisbane, Perth, Adelaide

```
Sydney | $XXX | $XX | $XXX
...
```

#### ⏸️ Brazil
**Code:** 1042  
**Cities to collect:** São Paulo, Rio de Janeiro, Brasília, Salvador

```
São Paulo | $XXX | $XX | $XXX
...
```

#### ⏸️ China
**Code:** 1123  
**Cities to collect:** Beijing, Shanghai, Guangzhou, Shenzhen, Chengdu

```
Beijing | $XXX | $XX | $XXX
...
```

#### ⏸️ India
**Code:** 1155  
**Cities to collect:** New Delhi, Mumbai, Bangalore, Chennai, Kolkata

```
New Delhi | $XXX | $XX | $XXX
...
```

#### ⏸️ Indonesia
**Code:** 1127  
**Cities to collect:** Jakarta, Surabaya, Bandung, Medan

```
Jakarta | $XXX | $XX | $XXX
...
```

#### ⏸️ Mexico
**Code:** 1059  
**Cities to collect:** Mexico City, Guadalajara, Monterrey, Cancun

```
Mexico City | $XXX | $XX | $XXX
...
```

#### ⏸️ Russia
**Code:** 1106  
**Cities to collect:** Moscow, St. Petersburg, Novosibirsk

```
Moscow | $XXX | $XX | $XXX
...
```

#### ⏸️ Saudi Arabia
**Code:** 1169  
**Cities to collect:** Riyadh, Jeddah, Mecca, Medina

```
Riyadh | $XXX | $XX | $XXX
...
```

#### ⏸️ South Africa
**Code:** 1233  
**Cities to collect:** Johannesburg, Cape Town, Durban, Pretoria

```
Johannesburg | $XXX | $XX | $XXX
...
```

#### ⏸️ South Korea
**Code:** 1129  
**Cities to collect:** Seoul, Busan, Incheon, Daegu

```
Seoul | $XXX | $XX | $XXX
...
```

#### ⏸️ Turkey
**Code:** 1111  
**Cities to collect:** Istanbul, Ankara, Izmir, Antalya

```
Istanbul | $XXX | $XX | $XXX
...
```

#### ⏸️ Argentina
**Code:** 1038  
**Cities to collect:** Buenos Aires, Córdoba, Rosario, Mendoza

```
Buenos Aires | $XXX | $XX | $XXX
...
```

---

## Conversion Script

After collecting data, run:
```bash
./scripts/convert-manual-to-json.sh MANUAL_COLLECTION_TEMPLATE.md
```

This will parse the data and generate JSON for `data.js`.
