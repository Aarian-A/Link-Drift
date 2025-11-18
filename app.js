// Serviceability Dataset (embedded from CSV with real addresses)
const serviceabilityData = [
    {
        "Address_ID": "A001",
        "Street_Address": "1245 Oak Ridge Apartments",
        "City": "Wichita Falls",
        "State": "TX",
        "ZIP_Code": "76301",
        "Latitude": 33.45,
        "Longitude": -98.23,
        "Address_Type": "Multi-Dwelling",
        "Technology_Type": "Fiber",
        "Speed_Tier": "1-10 Gbps",
        "Distance_to_Fiber_Node_ft": 1247,
        "Network_Load_%": 67,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 24,
        "Past_Install_Success_%": 87,
        "Trouble_Ticket_Rate_%": 12,
        "Cancelled_Appointments": 2,
        "Outages_Last_6mo": 4,
        "Avg_Hours_Service_Loss": 2.34,
        "Truck_Rolls_Last_6mo": 3,
        "TSO_Calls_Last_6mo": 5,
        "ASR_Calls_Last_6mo": 4,
        "Retention_Calls_Last_6mo": 1,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 1000,
        "Competitor_Tech": "Fiber",
        "Social_Media_Callouts": "Low",
        "Building_Age_Years": 28,
        "Customer_Density_per_sqmi": 3452,
        "ROI_Score": 0.76,
        "Address_Quality_Score": 89
    },
    {
        "Address_ID": "A002",
        "Street_Address": "3456 Elm Street",
        "City": "Livermore",
        "State": "CA",
        "ZIP_Code": "94550",
        "Latitude": 37.82,
        "Longitude": -121.45,
        "Address_Type": "Single-Family",
        "Technology_Type": "Copper",
        "Speed_Tier": "<1 Gbps",
        "Distance_to_Fiber_Node_ft": 456,
        "Network_Load_%": 43,
        "Fiber_Available": "No",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 12,
        "Past_Install_Success_%": 92,
        "Trouble_Ticket_Rate_%": 8,
        "Cancelled_Appointments": 0,
        "Outages_Last_6mo": 1,
        "Avg_Hours_Service_Loss": 0.56,
        "Truck_Rolls_Last_6mo": 1,
        "TSO_Calls_Last_6mo": 2,
        "ASR_Calls_Last_6mo": 1,
        "Retention_Calls_Last_6mo": 0,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 500,
        "Competitor_Tech": "Cable",
        "Social_Media_Callouts": "Low",
        "Building_Age_Years": 15,
        "Customer_Density_per_sqmi": 4821,
        "ROI_Score": 0.68,
        "Address_Quality_Score": 94
    },
    {
        "Address_ID": "A003",
        "Street_Address": "789 Business Park Drive",
        "City": "Sarasota",
        "State": "FL",
        "ZIP_Code": "34236",
        "Latitude": 27.91,
        "Longitude": -82.67,
        "Address_Type": "Commercial",
        "Technology_Type": "Mixed",
        "Speed_Tier": "10-25 Gbps",
        "Distance_to_Fiber_Node_ft": 1823,
        "Network_Load_%": 78,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "No",
        "Active_Services_in_MDU": 12,
        "Past_Install_Success_%": 76,
        "Trouble_Ticket_Rate_%": 18,
        "Cancelled_Appointments": 3,
        "Outages_Last_6mo": 6,
        "Avg_Hours_Service_Loss": 3.89,
        "Truck_Rolls_Last_6mo": 5,
        "TSO_Calls_Last_6mo": 8,
        "ASR_Calls_Last_6mo": 6,
        "Retention_Calls_Last_6mo": 3,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 5000,
        "Competitor_Tech": "Fiber",
        "Social_Media_Callouts": "Medium",
        "Building_Age_Years": 42,
        "Customer_Density_per_sqmi": 2134,
        "ROI_Score": 0.82,
        "Address_Quality_Score": 71
    },
    {
        "Address_ID": "A004",
        "Street_Address": "2890 Maple Lane",
        "City": "Houston",
        "State": "TX",
        "ZIP_Code": "77002",
        "Latitude": 29.76,
        "Longitude": -95.37,
        "Address_Type": "Single-Family",
        "Technology_Type": "Fiber",
        "Speed_Tier": ">25 Gbps",
        "Distance_to_Fiber_Node_ft": 634,
        "Network_Load_%": 54,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 18,
        "Past_Install_Success_%": 94,
        "Trouble_Ticket_Rate_%": 5,
        "Cancelled_Appointments": 1,
        "Outages_Last_6mo": 2,
        "Avg_Hours_Service_Loss": 1.23,
        "Truck_Rolls_Last_6mo": 2,
        "TSO_Calls_Last_6mo": 3,
        "ASR_Calls_Last_6mo": 2,
        "Retention_Calls_Last_6mo": 1,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 10000,
        "Competitor_Tech": "Fiber",
        "Social_Media_Callouts": "Low",
        "Building_Age_Years": 22,
        "Customer_Density_per_sqmi": 5432,
        "ROI_Score": 0.88,
        "Address_Quality_Score": 96
    },
    {
        "Address_ID": "A005",
        "Street_Address": "567 Sunset Plaza Condos",
        "City": "Los Angeles",
        "State": "CA",
        "ZIP_Code": "90012",
        "Latitude": 34.05,
        "Longitude": -118.25,
        "Address_Type": "Multi-Dwelling",
        "Technology_Type": "Fiber",
        "Speed_Tier": "Fiber available but no speed",
        "Distance_to_Fiber_Node_ft": 892,
        "Network_Load_%": 61,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "No",
        "Active_Services_in_MDU": 32,
        "Past_Install_Success_%": 68,
        "Trouble_Ticket_Rate_%": 15,
        "Cancelled_Appointments": 2,
        "Outages_Last_6mo": 5,
        "Avg_Hours_Service_Loss": 2.67,
        "Truck_Rolls_Last_6mo": 4,
        "TSO_Calls_Last_6mo": 6,
        "ASR_Calls_Last_6mo": 3,
        "Retention_Calls_Last_6mo": 2,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 1000,
        "Competitor_Tech": "DSL",
        "Social_Media_Callouts": "Medium",
        "Building_Age_Years": 35,
        "Customer_Density_per_sqmi": 3876,
        "ROI_Score": 0.71,
        "Address_Quality_Score": 78
    },
    {
        "Address_ID": "A006",
        "Street_Address": "4321 Pine Avenue",
        "City": "Orlando",
        "State": "FL",
        "ZIP_Code": "32801",
        "Latitude": 28.54,
        "Longitude": -81.38,
        "Address_Type": "Single-Family",
        "Technology_Type": "Copper",
        "Speed_Tier": "<1 Gbps",
        "Distance_to_Fiber_Node_ft": 1456,
        "Network_Load_%": 38,
        "Fiber_Available": "No",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 0,
        "Past_Install_Success_%": 85,
        "Trouble_Ticket_Rate_%": 9,
        "Cancelled_Appointments": 1,
        "Outages_Last_6mo": 3,
        "Avg_Hours_Service_Loss": 1.45,
        "Truck_Rolls_Last_6mo": 2,
        "TSO_Calls_Last_6mo": 4,
        "ASR_Calls_Last_6mo": 2,
        "Retention_Calls_Last_6mo": 0,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 500,
        "Competitor_Tech": "Cable",
        "Social_Media_Callouts": "Low",
        "Building_Age_Years": 19,
        "Customer_Density_per_sqmi": 4123,
        "ROI_Score": 0.65,
        "Address_Quality_Score": 91
    },
    {
        "Address_ID": "A007",
        "Street_Address": "8900 Cedar Hills Apartments",
        "City": "Dallas",
        "State": "TX",
        "ZIP_Code": "75201",
        "Latitude": 32.78,
        "Longitude": -96.8,
        "Address_Type": "Multi-Dwelling",
        "Technology_Type": "Mixed",
        "Speed_Tier": "1-10 Gbps",
        "Distance_to_Fiber_Node_ft": 723,
        "Network_Load_%": 72,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 28,
        "Past_Install_Success_%": 81,
        "Trouble_Ticket_Rate_%": 13,
        "Cancelled_Appointments": 2,
        "Outages_Last_6mo": 4,
        "Avg_Hours_Service_Loss": 2.89,
        "Truck_Rolls_Last_6mo": 3,
        "TSO_Calls_Last_6mo": 7,
        "ASR_Calls_Last_6mo": 5,
        "Retention_Calls_Last_6mo": 2,
        "Account_Suspended_for_NonPayment": "Yes",
        "Competitor_Max_Speed_Mbps": 1000,
        "Competitor_Tech": "Wireless",
        "Social_Media_Callouts": "High",
        "Building_Age_Years": 31,
        "Customer_Density_per_sqmi": 2945,
        "ROI_Score": 0.73,
        "Address_Quality_Score": 82
    },
    {
        "Address_ID": "A008",
        "Street_Address": "1500 Harbor Tech Center",
        "City": "San Diego",
        "State": "CA",
        "ZIP_Code": "92101",
        "Latitude": 32.72,
        "Longitude": -117.16,
        "Address_Type": "Commercial",
        "Technology_Type": "Fiber",
        "Speed_Tier": "10-25 Gbps",
        "Distance_to_Fiber_Node_ft": 1178,
        "Network_Load_%": 85,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 45,
        "Past_Install_Success_%": 89,
        "Trouble_Ticket_Rate_%": 7,
        "Cancelled_Appointments": 0,
        "Outages_Last_6mo": 1,
        "Avg_Hours_Service_Loss": 0.78,
        "Truck_Rolls_Last_6mo": 1,
        "TSO_Calls_Last_6mo": 2,
        "ASR_Calls_Last_6mo": 1,
        "Retention_Calls_Last_6mo": 0,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 5000,
        "Competitor_Tech": "Fiber",
        "Social_Media_Callouts": "Low",
        "Building_Age_Years": 12,
        "Customer_Density_per_sqmi": 5234,
        "ROI_Score": 0.85,
        "Address_Quality_Score": 93
    },
    {
        "Address_ID": "A009",
        "Street_Address": "6789 Riverside Drive",
        "City": "Jacksonville",
        "State": "FL",
        "ZIP_Code": "32202",
        "Latitude": 30.33,
        "Longitude": -81.66,
        "Address_Type": "Single-Family",
        "Technology_Type": "Fiber",
        "Speed_Tier": ">25 Gbps",
        "Distance_to_Fiber_Node_ft": 345,
        "Network_Load_%": 48,
        "Fiber_Available": "Yes",
        "Engineering_Ready": "Yes",
        "Active_Services_in_MDU": 0,
        "Past_Install_Success_%": 96,
        "Trouble_Ticket_Rate_%": 4,
        "Cancelled_Appointments": 0,
        "Outages_Last_6mo": 0,
        "Avg_Hours_Service_Loss": 0.12,
        "Truck_Rolls_Last_6mo": 0,
        "TSO_Calls_Last_6mo": 1,
        "ASR_Calls_Last_6mo": 0,
        "Retention_Calls_Last_6mo": 0,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 10000,
        "Competitor_Tech": "Fiber",
        "Social_Media_Callouts": "Low",
        "Building_Age_Years": 8,
        "Customer_Density_per_sqmi": 4567,
        "ROI_Score": 0.91,
        "Address_Quality_Score": 98
    },
    {
        "Address_ID": "A010",
        "Street_Address": "234 Valley View Apartments",
        "City": "Brownsville",
        "State": "TX",
        "ZIP_Code": "78520",
        "Latitude": 26.19,
        "Longitude": -98.23,
        "Address_Type": "Multi-Dwelling",
        "Technology_Type": "Copper",
        "Speed_Tier": "<1 Gbps",
        "Distance_to_Fiber_Node_ft": 1567,
        "Network_Load_%": 44,
        "Fiber_Available": "No",
        "Engineering_Ready": "No",
        "Active_Services_in_MDU": 6,
        "Past_Install_Success_%": 72,
        "Trouble_Ticket_Rate_%": 16,
        "Cancelled_Appointments": 3,
        "Outages_Last_6mo": 7,
        "Avg_Hours_Service_Loss": 3.45,
        "Truck_Rolls_Last_6mo": 6,
        "TSO_Calls_Last_6mo": 9,
        "ASR_Calls_Last_6mo": 7,
        "Retention_Calls_Last_6mo": 4,
        "Account_Suspended_for_NonPayment": "No",
        "Competitor_Max_Speed_Mbps": 100,
        "Competitor_Tech": "DSL",
        "Social_Media_Callouts": "Medium",
        "Building_Age_Years": 48,
        "Customer_Density_per_sqmi": 1876,
        "ROI_Score": 0.58,
        "Address_Quality_Score": 73
    }
];

// Validation rules
const validationRules = {
    streetAddress: {
        pattern: /^.{3,}$/,
        message: 'Street address must be at least 3 characters'
    },
    city: {
        pattern: /^[a-zA-Z\s]{2,}$/,
        message: 'City name must contain only letters and spaces (min 2 characters)'
    },
    zipCode: {
        pattern: /^\d{5}(-\d{4})?$/,
        message: 'ZIP code must be 5 digits (e.g., 75201) or 9 digits (e.g., 75201-1234)'
    },
    state: {
        required: true,
        message: 'State is required'
    },
    addressType: {
        required: true,
        message: 'Address type is required'
    }
};

// Key decision factors for serviceability
const serviceabilityFactors = {
    critical: [
        'Fiber_Available',
        'Engineering_Ready',
        'Distance_to_Fiber_Node_ft'
    ],
    qualityMetrics: [
        'Address_Quality_Score',
        'Past_Install_Success_%',
        'Trouble_Ticket_Rate_%'
    ],
    reliabilityMetrics: [
        'Outages_Last_6mo',
        'Avg_Hours_Service_Loss',
        'Truck_Rolls_Last_6mo'
    ],
    businessMetrics: [
        'ROI_Score',
        'Network_Load_%',
        'Customer_Density_per_sqmi'
    ]
};

// Form elements
const form = document.getElementById('addressForm');
const resetBtn = document.getElementById('resetBtn');
const resultsSection = document.getElementById('resultsSection');

// Form validation
function validateField(fieldName, value) {
    const rule = validationRules[fieldName];
    const errorElement = document.getElementById(`${fieldName}Error`);
    const inputElement = document.getElementById(fieldName);
    
    let isValid = true;
    let errorMessage = '';

    if (rule) {
        if (rule.pattern && !rule.pattern.test(value)) {
            isValid = false;
            errorMessage = rule.message;
        } else if (rule.required && !value) {
            isValid = false;
            errorMessage = rule.message;
        }
    }

    if (errorElement) {
        errorElement.textContent = errorMessage;
    }
    
    if (inputElement) {
        if (isValid) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    }

    return isValid;
}

// Add real-time validation
['streetAddress', 'city', 'zipCode', 'state', 'addressType'].forEach(fieldName => {
    const element = document.getElementById(fieldName);
    if (element) {
        element.addEventListener('blur', (e) => {
            validateField(fieldName, e.target.value);
        });
        
        element.addEventListener('input', (e) => {
            // Clear error on input
            const errorElement = document.getElementById(`${fieldName}Error`);
            if (errorElement && errorElement.textContent) {
                validateField(fieldName, e.target.value);
            }
        });
    }
});

// Calculate serviceability score
function calculateServiceabilityScore(data) {
    let score = 0;
    let maxScore = 100;
    
    // Critical factors (40 points)
    if (data.Fiber_Available === 'Yes') score += 15;
    if (data.Engineering_Ready === 'Yes') score += 15;
    if (data.Distance_to_Fiber_Node_ft < 1000) score += 10;
    else if (data.Distance_to_Fiber_Node_ft < 1500) score += 5;
    
    // Quality metrics (30 points)
    score += (data.Address_Quality_Score / 100) * 15;
    score += ((100 - data['Trouble_Ticket_Rate_%']) / 100) * 15;
    
    // Reliability metrics (20 points)
    if (data.Outages_Last_6mo < 3) score += 10;
    else if (data.Outages_Last_6mo < 5) score += 5;
    
    if (data.Avg_Hours_Service_Loss < 1) score += 10;
    else if (data.Avg_Hours_Service_Loss < 2) score += 5;
    
    // Business metrics (10 points)
    score += data.ROI_Score * 10;
    
    return Math.min(score, maxScore);
}

// Determine serviceability status
function determineServiceabilityStatus(data, score) {
    if (score >= 80 && data.Fiber_Available === 'Yes' && data.Engineering_Ready === 'Yes') {
        return 'serviceable';
    } else if (score >= 60 || data.Fiber_Available === 'Yes') {
        return 'limited';
    } else {
        return 'not-serviceable';
    }
}

// Generate recommendation
function generateRecommendation(data, status, score) {
    let recommendation = {
        title: '',
        message: '',
        type: ''
    };

    if (status === 'serviceable') {
        recommendation.type = 'success';
        recommendation.title = '✓ Excellent Service Available';
        recommendation.message = `This address is highly serviceable with ${data.Technology_Type} technology offering speeds up to ${data.Speed_Tier}. Installation success rate is ${data['Past_Install_Success_%']}% with minimal service disruptions. We recommend proceeding with service activation.`;
    } else if (status === 'limited') {
        recommendation.type = 'warning';
        recommendation.title = '⚠ Limited Service Available';
        
        if (data.Fiber_Available === 'Yes' && data.Engineering_Ready === 'No') {
            recommendation.message = `Fiber infrastructure is available but engineering work is required. Expected lead time: 2-4 weeks. Current ${data.Technology_Type} service with ${data.Speed_Tier} speeds can be provided in the interim.`;
        } else if (data.Distance_to_Fiber_Node_ft > 1500) {
            recommendation.message = `Address is ${data.Distance_to_Fiber_Node_ft}ft from the nearest fiber node. Service is available via ${data.Technology_Type} technology with speeds up to ${data.Speed_Tier}, but fiber upgrade may require additional investment.`;
        } else {
            recommendation.message = `Service is available with ${data.Technology_Type} technology at ${data.Speed_Tier} speeds. Some quality limitations noted - past install success rate is ${data['Past_Install_Success_%']}%.`;
        }
    } else {
        recommendation.type = 'danger';
        recommendation.title = '✗ Service Currently Unavailable';
        recommendation.message = `Unfortunately, this address is not currently serviceable. Fiber is not available within economical distance (${data.Distance_to_Fiber_Node_ft}ft to nearest node), and existing ${data.Technology_Type} infrastructure is limited. We recommend checking back for network expansion updates.`;
    }

    return recommendation;
}

// Calculate tech availability based on address data and current time
function calculateTechAvailability(addressData) {
    const currentHour = new Date().getHours();
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 6 = Saturday
    
    // Safely extract network load and quality score with fallbacks
    const networkLoad = parseFloat(addressData['Network_Load_%'] || addressData.Network_Load || 50);
    const qualityScore = parseFloat(addressData.Address_Quality_Score || 75);
    
    // Base tech count influenced by network load and address quality
    const baseAvailability = Math.floor((100 - networkLoad) / 10);
    const qualityFactor = qualityScore > 85 ? 1.5 : 1.0;
    const baseTechCount = Math.max(2, Math.floor(baseAvailability * qualityFactor));
    
    // Determine availability window
    let availabilityWindow = '';
    let techCount = 0;
    let availableDate = '';
    
    // Check if within business hours (6am - 6pm)
    if (currentHour >= 6 && currentHour < 18) {
        // Next 3 hours availability
        const hoursRemaining = 18 - currentHour;
        if (hoursRemaining >= 3) {
            // High network load or engineering not ready = fewer techs
            if (networkLoad > 80 || addressData.Engineering_Ready === 'No') {
                techCount = Math.max(1, Math.floor(baseTechCount * 0.5));
                availabilityWindow = 'Tomorrow';
                availableDate = getTomorrowDate();
            } else {
                techCount = baseTechCount;
                availabilityWindow = 'Today (Next 3 hrs)';
                availableDate = 'Today';
            }
        } else {
            // Less than 3 hours left today
            techCount = Math.max(2, baseTechCount);
            availabilityWindow = 'Tomorrow Morning';
            availableDate = getTomorrowDate();
        }
    } else {
        // Outside business hours - show next business day
        if (dayOfWeek === 5) { // Friday evening
            techCount = baseTechCount + 2; // More techs available Monday
            availabilityWindow = 'Monday';
            availableDate = getNextBusinessDay(3);
        } else if (dayOfWeek === 6) { // Saturday
            techCount = baseTechCount + 2;
            availabilityWindow = 'Monday';
            availableDate = getNextBusinessDay(2);
        } else if (dayOfWeek === 0) { // Sunday
            techCount = baseTechCount + 2;
            availabilityWindow = 'Monday';
            availableDate = getNextBusinessDay(1);
        } else {
            techCount = baseTechCount;
            availabilityWindow = 'Tomorrow Morning';
            availableDate = getTomorrowDate();
        }
    }
    
    // Adjust based on trouble tickets and outages
    const troubleTicketRate = parseFloat(addressData['Trouble_Ticket_Rate_%'] || addressData.Trouble_Ticket_Rate || 0);
    const outages = parseInt(addressData.Outages_Last_6mo || 0);
    
    if (troubleTicketRate > 10 || outages > 3) {
        techCount = Math.max(1, techCount - 1);
    }
    
    // Fiber available areas get priority
    if (addressData.Fiber_Available === 'Yes' && addressData.Engineering_Ready === 'Yes') {
        techCount += 1;
    }
    
    // Ensure techCount is a valid number
    techCount = Math.max(0, Math.floor(techCount));
    
    // Determine if there's a tech shortage
    const hasShortage = techCount === 0;
    
    return {
        count: techCount,
        hasShortage: hasShortage,
        window: availabilityWindow,
        date: availableDate,
        timeSlot: availabilityWindow.includes('Next 3 hrs') ? getTimeSlot() : '8:00 AM - 12:00 PM'
    };
}

// Helper function to get tomorrow's date
function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

// Helper function to get next business day
function getNextBusinessDay(daysToAdd) {
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + daysToAdd);
    return nextDay.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

// Helper function to get current time slot
function getTimeSlot() {
    const now = new Date();
    const currentHour = now.getHours();
    const startHour = currentHour + 1;
    const endHour = Math.min(startHour + 3, 18);
    
    const formatHour = (hour) => {
        const period = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour > 12 ? hour - 12 : hour;
        return `${displayHour}:00 ${period}`;
    };
    
    return `${formatHour(startHour)} - ${formatHour(endHour)}`;
}

// Calculate active customers in area with hierarchical lookup - returns highest count only
function calculateActiveCustomersInArea(currentAddress) {
    const results = [];
    
    // Check 1: Same MDU Building (for Multi-Dwelling units)
    if (currentAddress.Address_Type === 'Multi-Dwelling' && currentAddress.Active_Services_in_MDU > 0) {
        results.push({
            count: currentAddress.Active_Services_in_MDU,
            matchType: 'Building',
            title: 'Active Customers in Building'
        });
    }
    
    // Check 2: Same Street
    const streetMatches = serviceabilityData.filter(item => 
        item.Street_Address !== currentAddress.Street_Address &&
        normalizeString(item.Street_Address).split(' ').some(word => 
            normalizeString(currentAddress.Street_Address).split(' ').includes(word) && word.length > 3
        ) &&
        item.State === currentAddress.State
    );
    
    if (streetMatches.length > 0) {
        const streetCount = streetMatches.reduce((sum, item) => 
            sum + (item.Active_Services_in_MDU || 0), 0
        );
        if (streetCount > 0) {
            results.push({
                count: streetCount,
                matchType: 'Street',
                title: 'Active Customers on Street'
            });
        }
    }
    
    // Check 3: Same City
    const cityMatches = serviceabilityData.filter(item => 
        item.Address_ID !== currentAddress.Address_ID &&
        item.City === currentAddress.City &&
        item.State === currentAddress.State
    );
    
    if (cityMatches.length > 0) {
        const cityCount = cityMatches.reduce((sum, item) => 
            sum + (item.Active_Services_in_MDU || 0), 0
        );
        if (cityCount > 0) {
            results.push({
                count: cityCount,
                matchType: 'City',
                title: 'Active Customers in City'
            });
        }
    }
    
    // Check 4: Same ZIP Code
    const zipMatches = serviceabilityData.filter(item => 
        item.Address_ID !== currentAddress.Address_ID &&
        item.ZIP_Code.substring(0, 5) === currentAddress.ZIP_Code.substring(0, 5)
    );
    
    if (zipMatches.length > 0) {
        const zipCount = zipMatches.reduce((sum, item) => 
            sum + (item.Active_Services_in_MDU || 0), 0
        );
        if (zipCount > 0) {
            results.push({
                count: zipCount,
                matchType: 'Area',
                title: 'Active Customers in Area'
            });
        }
    }
    
    // Return the result with the highest count, or null if no active customers
    if (results.length === 0) {
        return null;
    }
    
    return results.reduce((highest, current) => 
        current.count > highest.count ? current : highest
    );
}

// Display results
function displayResults(data) {
    const score = calculateServiceabilityScore(data);
    const status = determineServiceabilityStatus(data, score);
    const recommendation = generateRecommendation(data, status, score);
    const activeCustomers = calculateActiveCustomersInArea(data);
    const techAvailability = calculateTechAvailability(data);

    // Show results section
    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Update status badge
    const statusBadge = document.getElementById('statusBadge');
    statusBadge.textContent = status.replace('-', ' ');
    statusBadge.className = `status-badge ${status}`;

    // Technology & Speed
    document.getElementById('technologyInfo').innerHTML = `
        <p><strong>Technology:</strong> ${data.Technology_Type}</p>
        <p><strong>Speed Tier:</strong> ${data.Speed_Tier}</p>
        <p><strong>Fiber Available:</strong> ${data.Fiber_Available}</p>
        <p><strong>Engineering Ready:</strong> ${data.Engineering_Ready}</p>
        <p><strong>Distance to Node:</strong> ${data.Distance_to_Fiber_Node_ft} ft</p>
    `;

    // Network Quality - Calculate overall completion percentage
    const networkQualityPercent = Math.round(
        (parseFloat(data.Address_Quality_Score) * 0.4) + 
        (parseFloat(data['Past_Install_Success_%']) * 0.3) + 
        ((100 - parseFloat(data['Network_Load_%'])) * 0.2) + 
        ((100 - parseFloat(data['Trouble_Ticket_Rate_%'])) * 0.1)
    );
    
    document.getElementById('qualityInfo').innerHTML = `
        <p><strong>Quality Score:</strong> ${data.Address_Quality_Score}/100</p>
        <p><strong>Install Success Rate:</strong> ${data['Past_Install_Success_%']}%</p>
        <p><strong>Network Load:</strong> ${data['Network_Load_%']}%</p>
        <p><strong>Trouble Ticket Rate:</strong> ${data['Trouble_Ticket_Rate_%']}%</p>
        <div style="margin-top: 0.75rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-primary);">Overall Network Quality</span>
                <span style="font-size: 0.875rem; font-weight: 700; color: #E31837;">${networkQualityPercent}%</span>
            </div>
            <div class="score-bar">
                <div class="score-fill" style="width: ${networkQualityPercent}%"></div>
            </div>
        </div>
    `;

    // Service Reliability
    document.getElementById('reliabilityInfo').innerHTML = `
        <p><strong>Outages (6 mo):</strong> ${data.Outages_Last_6mo}</p>
        <p><strong>Avg Service Loss:</strong> ${data.Avg_Hours_Service_Loss} hrs</p>
        <p><strong>Truck Rolls:</strong> ${data.Truck_Rolls_Last_6mo}</p>
        <p><strong>Cancelled Appointments:</strong> ${data.Cancelled_Appointments}</p>
    `;

    // Market Intelligence
    document.getElementById('marketInfo').innerHTML = `
        <p><strong>Competitor Speed:</strong> ${data.Competitor_Max_Speed_Mbps} Mbps</p>
        <p><strong>Competitor Tech:</strong> ${data.Competitor_Tech}</p>
        <p><strong>Customer Density:</strong> ${data.Customer_Density_per_sqmi}/sq mi</p>
        <p><strong>ROI Score:</strong> ${(data.ROI_Score * 100).toFixed(0)}%</p>
        <p><strong>Social Media Sentiment:</strong> ${data.Social_Media_Callouts}</p>
    `;

    // Recommendation
    const recommendationCard = document.getElementById('recommendationCard');
    const iconColors = {
        success: 'background: linear-gradient(135deg, #10b981 0%, #059669 100%);',
        warning: 'background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);',
        danger: 'background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);'
    };
    
    const iconSymbols = {
        success: '✓',
        warning: '⚠',
        danger: '✗'
    };
    
    recommendationCard.innerHTML = `
        <h3>
            <span class="icon" style="${iconColors[recommendation.type]}">
                ${iconSymbols[recommendation.type]}
            </span>
            ${recommendation.title.replace(/^[✓⚠✗]\s*/, '')}
        </h3>
        <p style="color: var(--text-secondary); line-height: 1.8; font-size: 1.05rem;">${recommendation.message}</p>
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(249, 250, 251, 0.7); backdrop-filter: blur(10px); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.3);">
            <strong>Overall Serviceability Score: ${score.toFixed(1)}/100</strong>
        </div>
    `;

    // Detailed Metrics
    const metricsGrid = document.getElementById('detailedMetrics');
    
    // Build metrics HTML
    let metricsHTML = `
        <div class="metric-item">
            <div class="metric-label">Address Type</div>
            <div class="metric-value">${data.Address_Type}</div>
        </div>
        <div class="metric-item">
            <div class="metric-label">Active MDU Services</div>
            <div class="metric-value">${data.Active_Services_in_MDU}</div>
        </div>
        <div class="metric-item">
            <div class="metric-label">TSO Calls (6mo)</div>
            <div class="metric-value">${data.TSO_Calls_Last_6mo}</div>
        </div>
        <div class="metric-item">
            <div class="metric-label">ASR Calls (6mo)</div>
            <div class="metric-value">${data.ASR_Calls_Last_6mo}</div>
        </div>
        <div class="metric-item">
            <div class="metric-label">Retention Calls (6mo)</div>
            <div class="metric-value">${data.Retention_Calls_Last_6mo}</div>
        </div>
        <div class="metric-item">
            <div class="metric-label">Building Age</div>
            <div class="metric-value">${data.Building_Age_Years} years</div>
        </div>
    `;
    
    // Show Active Customers if count > 0, otherwise show Field Tech Availability
    if (activeCustomers && activeCustomers.count > 0) {
        metricsHTML += `
        <div class="metric-item" style="background: rgba(16, 185, 129, 0.1); border-left-color: #10b981;">
            <div class="metric-label">${activeCustomers.title}</div>
            <div class="metric-value">${activeCustomers.count} ${activeCustomers.count === 1 ? 'customer' : 'customers'}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
                📍 Same ${activeCustomers.matchType}
            </div>
        </div>
        `;
    } else {
        // Show Field Tech Availability when no active customers
        if (techAvailability.hasShortage || techAvailability.count === 0) {
            // Tech shortage scenario
            metricsHTML += `
            <div class="metric-item" style="background: rgba(239, 68, 68, 0.1); border-left-color: #ef4444;">
                <div class="metric-label">Field Tech Availability</div>
                <div class="metric-value" style="color: #ef4444;">Tech Shortage</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
                    ⚠️ High demand area
                </div>
                <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.15rem;">
                    📅 Please call for scheduling • 1-800-FRONTIER
                </div>
            </div>
            `;
        } else {
            // Normal tech availability
            const availabilityColor = techAvailability.window.includes('Today') ? '#10b981' : '#f59e0b';
            const availabilityBg = techAvailability.window.includes('Today') ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)';
            
            metricsHTML += `
            <div class="metric-item" style="background: ${availabilityBg}; border-left-color: ${availabilityColor};">
                <div class="metric-label">Field Tech Availability</div>
                <div class="metric-value">${techAvailability.count} ${techAvailability.count === 1 ? 'technician' : 'technicians'}</div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.25rem;">
                    🔧 ${techAvailability.window}
                </div>
                <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 0.15rem;">
                    📅 ${techAvailability.date} • ${techAvailability.timeSlot}
                </div>
            </div>
            `;
        }
    }
    
    metricsHTML += `
        <div class="metric-item">
            <div class="metric-label">Location</div>
            <div class="metric-value">${data.State} (${data.Latitude.toFixed(2)}, ${data.Longitude.toFixed(2)})</div>
        </div>
    `;
    
    metricsGrid.innerHTML = metricsHTML;
}

// Normalize string for comparison (lowercase, remove extra spaces)
function normalizeString(str) {
    return str.toLowerCase().trim().replace(/\s+/g, ' ');
}

// Calculate address similarity score
function calculateAddressSimilarity(formData, dataItem) {
    let score = 0;
    
    // Exact state match (required) - 30 points
    if (formData.state === dataItem.State) {
        score += 30;
    } else {
        return 0; // Different state = no match
    }
    
    // City match - 25 points
    if (normalizeString(formData.city) === normalizeString(dataItem.City)) {
        score += 25;
    }
    
    // ZIP code match - 25 points
    if (formData.zipCode.substring(0, 5) === dataItem.ZIP_Code.substring(0, 5)) {
        score += 25;
    }
    
    // Address type match - 10 points
    if (formData.addressType === dataItem.Address_Type) {
        score += 10;
    }
    
    // Street address similarity - 10 points (partial match)
    const formStreet = normalizeString(formData.streetAddress);
    const dataStreet = normalizeString(dataItem.Street_Address);
    if (formStreet.includes(dataStreet) || dataStreet.includes(formStreet)) {
        score += 10;
    } else {
        // Check for any common words
        const formWords = formStreet.split(' ');
        const dataWords = dataStreet.split(' ');
        const commonWords = formWords.filter(word => dataWords.includes(word) && word.length > 2);
        if (commonWords.length > 0) {
            score += 5;
        }
    }
    
    return score;
}

// Form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const formData = {
        streetAddress: document.getElementById('streetAddress').value.trim(),
        city: document.getElementById('city').value.trim(),
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zipCode').value.trim(),
        addressType: document.getElementById('addressType').value
    };

    // Validate all fields
    let isValid = true;
    Object.keys(validationRules).forEach(field => {
        const value = formData[field];
        if (!validateField(field, value)) {
            isValid = false;
        }
    });

    if (!isValid) {
        return;
    }

    // Find best matching address from dataset
    let bestMatch = null;
    let highestScore = 0;
    
    serviceabilityData.forEach(item => {
        const score = calculateAddressSimilarity(formData, item);
        if (score > highestScore) {
            highestScore = score;
            bestMatch = item;
        }
    });

    // If no good match found (score < 30), try to find by state only
    if (!bestMatch || highestScore < 30) {
        bestMatch = serviceabilityData.find(item => item.State === formData.state);
    }

    // If still no match, use first item as fallback
    if (!bestMatch) {
        bestMatch = serviceabilityData[0];
    }

    // Display results
    displayResults(bestMatch);
});

// Reset form
resetBtn.addEventListener('click', () => {
    form.reset();
    resultsSection.style.display = 'none';
    
    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    document.querySelectorAll('input, select').forEach(el => el.classList.remove('error'));
});

// Initialize - scroll to top
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

