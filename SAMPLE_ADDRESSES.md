# Sample Addresses for Testing

Use these addresses to test the Serviceability Copilot. Copy and paste them into the form fields.

## Texas (TX) Addresses

### 1. Houston - Premium Fiber Service (A004)
- **Street Address:** 2890 Maple Lane
- **City:** Houston
- **State:** TX
- **ZIP Code:** 77002
- **Address Type:** Single-Family
- **Expected Result:** ✅ Serviceable - >25 Gbps Fiber

### 2. Dallas - Multi-Dwelling (A007)
- **Street Address:** 8900 Cedar Hills Apartments
- **City:** Dallas
- **State:** TX
- **ZIP Code:** 75201
- **Address Type:** Multi-Dwelling
- **Expected Result:** ⚠️ Limited - 1-10 Gbps Mixed Technology

### 3. Wichita Falls - Apartment Complex (A001)
- **Street Address:** 1245 Oak Ridge Apartments
- **City:** Wichita Falls
- **State:** TX
- **ZIP Code:** 76301
- **Address Type:** Multi-Dwelling
- **Expected Result:** ⚠️ Limited - 1-10 Gbps Fiber

### 4. Brownsville - Copper Service (A010)
- **Street Address:** 234 Valley View Apartments
- **City:** Brownsville
- **State:** TX
- **ZIP Code:** 78520
- **Address Type:** Multi-Dwelling
- **Expected Result:** ✗ Not Serviceable - <1 Gbps Copper

## California (CA) Addresses

### 5. San Diego - Commercial Fiber (A008)
- **Street Address:** 1500 Harbor Tech Center
- **City:** San Diego
- **State:** CA
- **ZIP Code:** 92101
- **Address Type:** Commercial
- **Expected Result:** ✅ Serviceable - 10-25 Gbps Fiber

### 6. Los Angeles - Limited Service (A005)
- **Street Address:** 567 Sunset Plaza Condos
- **City:** Los Angeles
- **State:** CA
- **ZIP Code:** 90012
- **Address Type:** Multi-Dwelling
- **Expected Result:** ⚠️ Limited - Fiber Available (Engineering Required)

### 7. Livermore - Copper Service (A002)
- **Street Address:** 3456 Elm Street
- **City:** Livermore
- **State:** CA
- **ZIP Code:** 94550
- **Address Type:** Single-Family
- **Expected Result:** ⚠️ Limited - <1 Gbps Copper

## Florida (FL) Addresses

### 8. Jacksonville - Premium Service (A009)
- **Street Address:** 6789 Riverside Drive
- **City:** Jacksonville
- **State:** FL
- **ZIP Code:** 32202
- **Address Type:** Single-Family
- **Expected Result:** ✅ Serviceable - >25 Gbps Fiber (Best Quality!)

### 9. Orlando - Standard Service (A006)
- **Street Address:** 4321 Pine Avenue
- **City:** Orlando
- **State:** FL
- **ZIP Code:** 32801
- **Address Type:** Single-Family
- **Expected Result:** ⚠️ Limited - <1 Gbps Copper

### 10. Sarasota - Commercial Mixed (A003)
- **Street Address:** 789 Business Park Drive
- **City:** Sarasota
- **State:** FL
- **ZIP Code:** 34236
- **Address Type:** Commercial
- **Expected Result:** ⚠️ Limited - 10-25 Gbps (Engineering Required)

## Tips for Testing

1. **Exact Match Testing:** Use the exact addresses listed above for the best match
2. **Partial Match Testing:** Try variations (e.g., just street number, or slightly different city names) to see the fuzzy matching in action
3. **State-Only Testing:** Try entering a different address with the same state to see fallback behavior
4. **Different States:** Test addresses from states not in the dataset (NY, WA, IL) to see how the system handles unknown locations

## Address Matching Algorithm

The system uses a smart matching algorithm that scores addresses based on:
- **State Match (30 points):** Required - different state = no match
- **City Match (25 points):** Exact city name match
- **ZIP Code Match (25 points):** First 5 digits must match
- **Address Type Match (10 points):** Single-Family, Multi-Dwelling, or Commercial
- **Street Address Similarity (10 points):** Partial or word matching

**Total Score:** Maximum of 100 points
- **90-100:** Exact or near-exact match
- **80-89:** Very good match
- **55-79:** Good partial match
- **30-54:** Basic state/type match
- **<30:** Fallback to state-only search

---

**Note:** These are simulated addresses for testing purposes. In production, this would connect to a real address database.

