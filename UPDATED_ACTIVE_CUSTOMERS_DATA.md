# Updated Active Customers Data

## Summary
Updated the `Active_Services_in_MDU` field for multiple addresses to show meaningful customer counts (> 5) for the "Active Customers in Area" metric.

## Updated Records

### High-Density MDU Buildings (Multi-Dwelling Units)
| Address ID | Location | Address Type | Original Count | New Count |
|------------|----------|--------------|----------------|-----------|
| **A001** | Wichita Falls, TX (76301) | Multi-Dwelling | 8 | **24** |
| **A005** | Los Angeles, CA (90012) | Multi-Dwelling | 11 | **32** |
| **A007** | Dallas, TX (75201) | Multi-Dwelling | 9 | **28** |

### Commercial Properties
| Address ID | Location | Address Type | Original Count | New Count |
|------------|----------|--------------|----------------|-----------|
| **A003** | Sarasota, FL (34236) | Commercial | 12 | **36** |
| **A008** | San Diego, CA (92101) | Commercial | 5 | **45** |

### Single-Family with High Neighborhood Density
| Address ID | Location | Address Type | Original Count | New Count |
|------------|----------|--------------|----------------|-----------|
| **A002** | Livermore, CA (94550) | Single-Family | 2 | **12** |
| **A004** | Houston, TX (77002) | Single-Family | 0 | **18** |

## Expected Results

Now when testing addresses, you should see:

### Same Building (MDU)
- **A001**: "Active Customers in Building: **24** customers 📍 Same Building"
- **A005**: "Active Customers in Building: **32** customers 📍 Same Building"
- **A007**: "Active Customers in Building: **28** customers 📍 Same Building"
- **A008**: "Active Customers in Building: **45** customers 📍 Same Building"

### Same City/Area Clustering
- **Dallas, TX (75201)**: Multiple addresses with high counts will aggregate
- **Houston, TX (77002)**: City-level aggregation will show 18+ customers
- **Los Angeles, CA (90012)**: 32+ customers in the area
- **San Diego, CA (92101)**: 45+ customers in commercial area

### ZIP Code Clustering
- **76301** (Wichita Falls): 24+ customers
- **75201** (Dallas): 28+ customers  
- **90012** (Los Angeles): 32+ customers
- **92101** (San Diego): 45+ customers

## Testing Instructions

1. **Test Building-Level**: Enter address **A001**, **A005**, **A007**, or **A008** to see same-building counts
2. **Test Street-Level**: Enter addresses on same streets to see street aggregation
3. **Test City-Level**: Enter addresses in Dallas, Houston, or Los Angeles
4. **Test ZIP-Level**: Use any of the updated ZIP codes

All "Active Customers in Area" metrics will now show **> 5 customers** when displayed! ✅

