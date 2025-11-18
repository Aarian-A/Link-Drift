# Link Drift Serviceability Copilot

A modern, intuitive web application for checking service availability and quality metrics for any address.

## Features

### 🎯 Core Functionality
- **Address Validation**: Real-time validation with specific rules for address format, coordinates, and location data
- **Serviceability Assessment**: Comprehensive analysis based on multiple factors including technology availability, network quality, and reliability metrics
- **Intelligent Matching**: Fuzzy matching algorithm to find similar addresses when exact match is not available
- **Quality Scoring**: Automated scoring system (0-100) based on critical service factors

### 📊 Key Metrics Analyzed

#### Critical Factors (40% weight)
- Fiber availability
- Engineering readiness
- Distance to fiber node

#### Quality Metrics (30% weight)
- Address quality score
- Past installation success rate
- Trouble ticket rate

#### Reliability Metrics (20% weight)
- Service outages history
- Average service loss duration
- Maintenance truck rolls

#### Business Metrics (10% weight)
- ROI score
- Network load
- Customer density

### ✅ Validation Rules

1. **Street Address**: Must be at least 3 characters long
2. **City**: Must contain only letters and spaces (minimum 2 characters)
3. **ZIP Code**: Must be 5 digits (e.g., 75201) or 9 digits with hyphen (e.g., 75201-1234)
4. **State**: Required selection from available states
5. **Address Type**: Required selection (Single-Family, Multi-Dwelling, Commercial)

### 🎨 UI Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Cards**: Hover effects and visual feedback
- **Real-time Validation**: Instant feedback on form inputs
- **Smart Recommendations**: Context-aware service recommendations based on data analysis

## Usage

### Opening the Application

1. Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
2. No server setup required - runs entirely in the browser

### Checking Serviceability

1. **Enter Address Details**:
   - Street Address (e.g., 2890 Maple Lane)
   - City (e.g., Houston)
   - State (select from dropdown)
   - ZIP Code (e.g., 77002)
   - Address Type (Single-Family, Multi-Dwelling, or Commercial)

2. **Submit**: Click "Check Serviceability" button

3. **Review Results**:
   - **Status Badge**: Shows overall serviceability (Serviceable, Limited, Not Serviceable)
   - **Technology & Speed**: Available technology types and speed tiers
   - **Network Quality**: Quality scores and performance metrics
   - **Service Reliability**: Historical reliability data
   - **Market Intelligence**: Competitive landscape and ROI data
   - **Recommendations**: AI-generated recommendations based on analysis
   - **Detailed Metrics**: Comprehensive breakdown of all factors

### Sample Addresses in Dataset

Try these real addresses from our dataset:
- **2890 Maple Lane, Houston, TX 77002** - Single-Family, Fiber, Excellent quality (>25 Gbps)
- **8900 Cedar Hills Apartments, Dallas, TX 75201** - Multi-Dwelling, Mixed, Good quality (1-10 Gbps)
- **6789 Riverside Drive, Jacksonville, FL 32202** - Single-Family, Fiber, Premium quality (>25 Gbps)
- **1500 Harbor Tech Center, San Diego, CA 92101** - Commercial, Fiber, High performance (10-25 Gbps)
- **234 Valley View Apartments, Brownsville, TX 78520** - Multi-Dwelling, Copper, Limited service (<1 Gbps)

## Technology Stack

- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid layouts
- **Vanilla JavaScript**: No dependencies, pure ES6+ JavaScript
- **Embedded Dataset**: 10 real addresses with comprehensive metrics
- **Smart Address Matching**: Fuzzy matching algorithm with similarity scoring

## Serviceability Decision Logic

### Serviceable (Score ≥ 80)
- Fiber available: Yes
- Engineering ready: Yes
- High quality score
- Low trouble tickets
- Minimal outages

### Limited Service (Score 60-79)
- Fiber may be available but engineering work required
- OR distance to fiber node is significant
- OR quality metrics show some concerns
- Service available but with caveats

### Not Serviceable (Score < 60)
- No fiber available
- Engineering not ready
- High distance to infrastructure
- Poor quality metrics

## File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── app.js              # Application logic and data
└── README.md           # This file
```

## Customization

### Adding More Addresses

Edit `app.js` and add entries to the `serviceabilityData` array following this structure:

```javascript
{
    "Address_ID": "A011",
    "Street_Address": "123 Broadway Street",
    "City": "New York",
    "State": "NY",
    "ZIP_Code": "10001",
    "Latitude": 40.7128,
    "Longitude": -74.0060,
    "Address_Type": "Commercial",
    "Technology_Type": "Fiber",
    "Speed_Tier": ">25 Gbps",
    // ... additional fields
}
```

### Adjusting Validation Rules

Modify the `validationRules` object in `app.js`:

```javascript
const validationRules = {
    streetAddress: {
        pattern: /^.{3,}$/,
        message: 'Your custom message'
    },
    zipCode: {
        pattern: /^\d{5}(-\d{4})?$/,
        message: 'Your custom message'
    },
    // ... other rules
};
```

### Customizing Scoring Algorithm

Edit the `calculateServiceabilityScore()` function in `app.js` to adjust weights and criteria.

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Load Time**: < 1 second
- **Form Validation**: Real-time (instant feedback)
- **Search Results**: Instant (no API calls)
- **Bundle Size**: < 100KB total

## Future Enhancements

- Integration with live address databases
- Map visualization of service areas
- Historical trend analysis
- Predictive maintenance alerts
- Multi-language support
- PDF report generation
- API integration for real-time data

## Support

For issues or questions, please contact the Link Drift support team.

---

**Version**: 1.0.0  
**Last Updated**: November 2025  
**License**: Proprietary - Link Drift Corporation

