# CSV Files Guide

I've created three CSV files with different levels of detail for various use cases:

## 📊 Files Created

### 1. `serviceability_addresses_complete.csv` ✅
**Complete dataset with all 31 fields**

Contains all address and serviceability metrics:
- Address information (Street, City, State, ZIP, Coordinates)
- Technology details (Type, Speed Tier, Fiber availability)
- Network metrics (Load, Distance to node, Engineering status)
- Quality metrics (Quality score, Install success rate, Trouble tickets)
- Reliability metrics (Outages, Service loss, Truck rolls)
- Support metrics (TSO/ASR/Retention calls)
- Business metrics (ROI score, Customer density, Competitor info)
- Building information (Age, Social media sentiment)

**Use for:** Complete data analysis, import into databases, comprehensive reporting

**Column Count:** 31 columns
**Row Count:** 10 addresses (plus header)

---

### 2. `addresses_simple.csv` ✅
**Simplified version with key information**

Contains essential fields only:
- Address_ID
- Street_Address
- City
- State
- ZIP_Code
- Address_Type
- Technology_Type
- Speed_Tier
- Fiber_Available
- Address_Quality_Score
- Serviceability_Status

**Use for:** Quick reference, presentations, summary reports

**Column Count:** 11 columns
**Row Count:** 10 addresses (plus header)

---

### 3. `addresses_for_testing.csv` ✅
**User-friendly format for manual testing**

Contains test-ready information:
- Street_Address
- City
- State
- ZIP_Code
- Address_Type
- Expected_Technology
- Expected_Speed
- Expected_Status (with helpful descriptions)

**Use for:** Manual testing, QA validation, user documentation

**Column Count:** 8 columns
**Row Count:** 10 addresses (plus header)

---

## 🎯 Quick Reference by State

### Texas (TX) - 4 addresses
1. **Wichita Falls** (76301) - Multi-Dwelling, Fiber
2. **Houston** (77002) - Single-Family, Fiber ⭐ Premium
3. **Dallas** (75201) - Multi-Dwelling, Mixed
4. **Brownsville** (78520) - Multi-Dwelling, Copper ⚠️ Limited

### California (CA) - 3 addresses
1. **Livermore** (94550) - Single-Family, Copper
2. **Los Angeles** (90012) - Multi-Dwelling, Fiber (Engineering needed)
3. **San Diego** (92101) - Commercial, Fiber ⭐ Excellent

### Florida (FL) - 3 addresses
1. **Sarasota** (34236) - Commercial, Mixed (Engineering needed)
2. **Orlando** (32801) - Single-Family, Copper
3. **Jacksonville** (32202) - Single-Family, Fiber ⭐ Best Quality!

---

## 📝 How to Use These Files

### For Development/Testing:
```bash
# Import into your application
import pandas as pd
df = pd.read_csv('serviceability_addresses_complete.csv')
```

### For Manual Testing:
1. Open `addresses_for_testing.csv`
2. Copy any address row
3. Paste values into the Serviceability Copilot form
4. Compare results with "Expected_Status" column

### For Presentations:
1. Use `addresses_simple.csv`
2. Import into Excel/Google Sheets
3. Create charts and pivot tables
4. Filter by state, technology, or serviceability status

### For Database Import:
1. Use `serviceability_addresses_complete.csv`
2. Import with proper data types:
   - Numeric: Latitude, Longitude, all percentage fields, scores
   - Text: Street_Address, City, State, ZIP_Code
   - Boolean: Fiber_Available (Yes/No), Engineering_Ready (Yes/No)

---

## 🔍 Example Queries

### Find all Fiber addresses:
```sql
SELECT Street_Address, City, State, Speed_Tier 
FROM addresses 
WHERE Technology_Type = 'Fiber'
```

### Find premium service locations (Quality Score > 90):
```sql
SELECT Street_Address, City, Address_Quality_Score 
FROM addresses 
WHERE Address_Quality_Score > 90
ORDER BY Address_Quality_Score DESC
```

### Count addresses by state:
```sql
SELECT State, COUNT(*) as Total 
FROM addresses 
GROUP BY State
```

---

## 📦 File Sizes

- `serviceability_addresses_complete.csv`: ~2.5 KB
- `addresses_simple.csv`: ~800 bytes
- `addresses_for_testing.csv`: ~700 bytes

---

## 🚀 Ready to Use!

All CSV files are:
- ✅ Properly formatted with headers
- ✅ UTF-8 encoded
- ✅ Compatible with Excel, Google Sheets, and databases
- ✅ Ready for import into applications
- ✅ Validated for data accuracy

---

**Generated:** November 2025  
**Version:** 1.0.0  
**Project:** Link Drift Serviceability Copilot

