# Tech Availability Feature

## Overview
When "Active Customers" count is 0 (no active customers in the area), the UI now displays a **"Tech Availability"** metric showing available technicians within business hours (6 AM - 6 PM).

## Feature Details

### Display Logic
- **Show "Active Customers"**: When count > 0
- **Show "Tech Availability"**: When count = 0 (no active customers found)

### Availability Windows

#### 1. **Today (Next 3 hrs)** 🟢 Green
- **Condition**: Current time between 6 AM - 3 PM, and 3+ hours remaining until 6 PM
- **Requirements**: 
  - Network Load ≤ 80%
  - Engineering Ready = "Yes"
- **Display**: 
  ```
  Tech Availability
  3 technicians
  🔧 Today (Next 3 hrs)
  📅 Today • 2:00 PM - 5:00 PM
  ```

#### 2. **Tomorrow Morning** 🟡 Amber
- **Condition**: Less than 3 hours left today OR high network load OR engineering not ready
- **Display**:
  ```
  Tech Availability
  4 technicians
  🔧 Tomorrow Morning
  📅 Wed, Dec 18 • 8:00 AM - 12:00 PM
  ```

#### 3. **Monday** 🟡 Amber (Weekend Handling)
- **Condition**: Current time is Friday evening, Saturday, or Sunday
- **Bonus**: +2 additional techs available on Monday
- **Display**:
  ```
  Tech Availability
  6 technicians
  🔧 Monday
  📅 Mon, Dec 16 • 8:00 AM - 12:00 PM
  ```

### Technician Count Calculation

#### Base Count Formula:
```javascript
baseAvailability = (100 - Network_Load) / 10
baseTechCount = floor(baseAvailability * qualityFactor)
```

#### Quality Factor:
- **Address Quality Score > 85**: 1.5x multiplier
- **Address Quality Score ≤ 85**: 1.0x multiplier

#### Adjustments:
- **High Issues** (Trouble Ticket Rate > 10% OR Outages > 3): -1 tech
- **Fiber Ready** (Fiber Available = "Yes" AND Engineering Ready = "Yes"): +1 tech
- **Weekend**: +2 techs (more available Monday)
- **Minimum**: Always at least 1-2 technicians

### Example Calculations

#### Example 1: High-Quality Area (Today Availability)
```
Address Quality Score: 92
Network Load: 45%
Engineering Ready: Yes
Fiber Available: Yes

Calculation:
- Base: (100 - 45) / 10 = 5.5
- Quality Factor: 1.5 (score > 85)
- Base Count: floor(5.5 * 1.5) = 8
- Fiber Bonus: +1 = 9 technicians
- Window: Today (Next 3 hrs)
```

#### Example 2: High Network Load (Tomorrow)
```
Address Quality Score: 78
Network Load: 85%
Engineering Ready: No
Fiber Available: No

Calculation:
- Base: (100 - 85) / 10 = 1.5
- Quality Factor: 1.0 (score ≤ 85)
- Base Count: floor(1.5 * 1.0) = 1
- High Load: Pushed to tomorrow
- Window: Tomorrow Morning
- Count: 1 technician
```

#### Example 3: Weekend Request (Monday)
```
Current Day: Saturday
Address Quality Score: 88
Network Load: 60%

Calculation:
- Base: (100 - 60) / 10 = 4
- Quality Factor: 1.5
- Base Count: floor(4 * 1.5) = 6
- Weekend Bonus: +2 = 8 technicians
- Window: Monday
```

## Visual Indicators

### Green Background (Same-Day)
```css
background: rgba(16, 185, 129, 0.1);
border-left-color: #10b981;
```
- Indicates technicians available today

### Amber Background (Future Day)
```css
background: rgba(245, 158, 11, 0.1);
border-left-color: #f59e0b;
```
- Indicates technicians available tomorrow or later

## Business Hours
- **Service Window**: 6:00 AM - 6:00 PM
- **Next 3 Hours**: Calculated from current hour + 1 to current hour + 4 (max 6 PM)
- **Default Morning Slot**: 8:00 AM - 12:00 PM

## Testing Addresses

### Addresses with NO Active Customers (Will Show Tech Availability):

| Address ID | Location | Expected Window | Expected Tech Count |
|------------|----------|-----------------|---------------------|
| A006 | Orlando, FL | Today/Tomorrow | 6+ technicians |
| A009 | Jacksonville, FL | Today | 5+ technicians |
| A010 | Chicago, IL | Varies | 4+ technicians |

### Test Scenarios:

1. **Test Same-Day Availability**:
   - Time: 10:00 AM on a weekday
   - Address: A009 (Jacksonville, FL)
   - Expected: "Today (Next 3 hrs)" with time slot 11:00 AM - 2:00 PM

2. **Test Tomorrow Availability**:
   - Time: 4:30 PM on a weekday
   - Address: A006 (Orlando, FL)
   - Expected: "Tomorrow Morning" with 8:00 AM - 12:00 PM slot

3. **Test Monday Availability**:
   - Time: Any time on Saturday
   - Address: A010 (Chicago, IL)
   - Expected: "Monday" with bonus techs

## Priority Logic
1. ✅ Show "Active Customers" if count > 0
2. ✅ Show "Tech Availability" if count = 0
3. ✅ Never show both metrics simultaneously

## User Experience Benefits
- **Immediate Information**: Users see tech availability without calling
- **Time Planning**: Clear next available slot helps users plan
- **Transparency**: Shows exact date and time window
- **Dynamic**: Updates based on current time and day of week

