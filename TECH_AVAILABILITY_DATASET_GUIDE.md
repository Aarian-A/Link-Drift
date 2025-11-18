# Tech Availability Dataset Guide

## Overview
Three CSV files have been created to document and test the Tech Availability feature:

1. **`tech_availability_dataset.csv`** - Comprehensive dataset with all calculations
2. **`tech_availability_testing_simple.csv`** - Simplified testing scenarios
3. **`tech_availability_calculation_guide.csv`** - Factor-by-factor calculation guide

---

## File 1: tech_availability_dataset.csv

### Complete Dataset with All Addresses

**Columns:**
- **Address Information**: Address_ID, Street_Address, City, State, ZIP_Code, Address_Type
- **Display Logic**: Active_Customers (count), Show_Metric (which metric displays)
- **Calculation Factors**: Network_Load_%, Quality_Score, Fiber_Available, Engineering_Ready, Trouble_Ticket_%, Outages_6mo
- **Tech Counts**: Base_Tech_Count, Quality_Multiplier, Tech_Count_Weekday, Tech_Count_Weekend
- **Availability Windows**: Availability_Window_AM, Availability_Window_PM, Availability_Window_Evening
- **Time Slots**: Time_Slot_Today, Time_Slot_Tomorrow
- **Expected Display**: Full display text shown in UI

### Key Insights from Dataset:

#### Addresses Showing "Active Customers" (8 addresses):
- **A001** - 24 customers in building (Wichita Falls, TX)
- **A002** - 12 customers on street (Livermore, CA)
- **A003** - 36 customers in building (Sarasota, FL)
- **A004** - 18 customers in city (Houston, TX)
- **A005** - 32 customers in building (Los Angeles, CA)
- **A007** - 28 customers in building (Dallas, TX)
- **A008** - 45 customers in building (San Diego, CA)
- **A010** - 6 customers in building (Brownsville, TX)

#### Addresses Showing "Tech Availability" (2 addresses):
- **A006** - 9 technicians available (Orlando, FL)
  - Network Load: 38% (low)
  - Quality Score: 91 (excellent)
  - **Best for same-day testing**
  
- **A009** - 9 technicians available (Jacksonville, FL)
  - Network Load: 48% (moderate)
  - Quality Score: 98 (highest)
  - **Best for same-day testing**

---

## File 2: tech_availability_testing_simple.csv

### Simplified Test Scenarios

**10 Test Cases Documented:**

#### Same-Day Availability Tests (Morning)
1. **A006 at 10:00 AM Weekday**
   - Expected: 9 technicians
   - Window: Today (Next 3 hrs)
   - Time Slot: 11:00 AM - 2:00 PM

2. **A009 at 11:00 AM Weekday**
   - Expected: 9 technicians
   - Window: Today (Next 3 hrs)
   - Time Slot: 12:00 PM - 3:00 PM

#### Next-Day Availability Tests (Late Afternoon)
3. **A006 at 4:30 PM Weekday**
   - Expected: 9 technicians
   - Window: Tomorrow Morning
   - Time Slot: 8:00 AM - 12:00 PM

4. **A009 at 4:30 PM Weekday**
   - Expected: 9 technicians
   - Window: Tomorrow Morning
   - Time Slot: 8:00 AM - 12:00 PM

#### Weekend Tests (Monday Scheduling)
5. **A006 on Saturday 2:00 PM**
   - Expected: 11 technicians (+2 weekend bonus)
   - Window: Monday
   - Time Slot: 8:00 AM - 12:00 PM

6. **A009 on Sunday 6:00 PM**
   - Expected: 11 technicians (+2 weekend bonus)
   - Window: Monday
   - Time Slot: 8:00 AM - 12:00 PM

#### Active Customer Override Tests
7-10. **A001, A002, A003, A005**
   - All show "Active Customers" instead
   - Tech Availability is NOT displayed

---

## File 3: tech_availability_calculation_guide.csv

### Factor-by-Factor Breakdown

**11 Factors Documented:**

#### Primary Factors
1. **Network_Load_%**
   - Formula: `(100 - Network_Load) / 10`
   - Example: 38% load → 6.2 → 6 base techs

2. **Quality_Score**
   - Multiplier: 1.5x if score > 85, else 1.0x
   - Example: Score 91 → 6 × 1.5 = 9 techs

#### Bonus/Penalty Factors
3. **Fiber_Available** → +1 tech (if Yes)
4. **Engineering_Ready** → No change to count but affects window
5. **Trouble_Ticket_%** → -1 tech (if > 10%)
6. **Outages_6mo** → -1 tech (if > 3)
7. **Weekend_Bonus** → +2 techs (Sat/Sun → Monday)

#### Timing Factors
8. **Current_Hour** → Determines if today/tomorrow/Monday
9. **Hours_Remaining** → Must have 3+ hours for same-day
10. **Day_of_Week** → 0=Sun, 6=Sat affects scheduling
11. **Base_Count_Min** → Always at least 1-2 techs minimum

---

## Usage Instructions

### For Testing:
```bash
# Test same-day availability
Enter address: 4321 Pine Avenue, Orlando, FL 32801
Test at: 10:00 AM on a weekday
Expected: "Tech Availability: 9 technicians | Today (Next 3 hrs)"

# Test next-day availability
Enter address: 4321 Pine Avenue, Orlando, FL 32801
Test at: 4:30 PM on a weekday
Expected: "Tech Availability: 9 technicians | Tomorrow Morning"

# Test weekend scheduling
Enter address: 6789 Riverside Drive, Jacksonville, FL 32202
Test at: Any time on Saturday or Sunday
Expected: "Tech Availability: 11 technicians | Monday"
```

### For Development:
1. Import `tech_availability_dataset.csv` to see all calculations
2. Use `tech_availability_testing_simple.csv` for test cases
3. Reference `tech_availability_calculation_guide.csv` for algorithm understanding

---

## Calculation Examples

### Example 1: A006 (Orlando) - Same Day
```
Network Load: 38%
Quality Score: 91
Fiber Available: No
Engineering Ready: Yes
Trouble Tickets: 9%
Outages: 3

Step 1: Base = (100 - 38) / 10 = 6.2 → 6
Step 2: Quality Multiplier = 1.5 (score > 85)
Step 3: Base Count = floor(6 × 1.5) = 9
Step 4: Fiber Bonus = 0 (not available)
Step 5: Issue Penalty = 0 (tickets < 10%, outages ≤ 3)
Final: 9 technicians
Window: Today (Next 3 hrs) if before 3 PM
```

### Example 2: A009 (Jacksonville) - Same Day
```
Network Load: 48%
Quality Score: 98
Fiber Available: Yes
Engineering Ready: Yes
Trouble Tickets: 4%
Outages: 0

Step 1: Base = (100 - 48) / 10 = 5.2 → 5
Step 2: Quality Multiplier = 1.5 (score > 85)
Step 3: Base Count = floor(5 × 1.5) = 7
Step 4: Fiber Bonus = +1 = 8
Step 5: Issue Penalty = 0
Final: 8 technicians
Window: Today (Next 3 hrs) if before 3 PM
```

### Example 3: Weekend Request - Monday
```
Any Address
Day of Week: Saturday or Sunday

Regular Tech Count: X technicians
Weekend Bonus: +2 technicians
Final: X + 2 technicians
Window: Monday
```

---

## Summary Statistics

### Tech Availability Distribution:
- **High Availability** (8-11 techs): A006, A009
- **Medium Availability** (4-7 techs): A001, A002, A007
- **Low Availability** (1-3 techs): A003, A005

### Display Metric Distribution:
- **Active Customers**: 8 out of 10 addresses (80%)
- **Tech Availability**: 2 out of 10 addresses (20%)

### Best Testing Addresses:
1. **A009** (Jacksonville, FL) - Highest quality (98), best for same-day tests
2. **A006** (Orlando, FL) - High quality (91), low load (38%), reliable for testing
3. **A003** (Sarasota, FL) - Engineering not ready, good for tomorrow-only tests

---

## Color Coding in UI

### Green Background (Same-Day):
- Tech Availability with "Today (Next 3 hrs)"
- Active Customers (any count > 0)

### Amber Background (Future Day):
- Tech Availability with "Tomorrow Morning"
- Tech Availability with "Monday"

All datasets are ready for testing and validation! ✅

