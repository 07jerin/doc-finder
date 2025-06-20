// Current data - Last updated: 2024-03-21
const doctors = [
  {
    "id": "127686",
    "name": "Dr. Sarah Johnson",
    "address": "123 Medical Center Dr, Toronto, ON M5G 1Z5",
    "phone": "(416) 555-0101",
    "speciality": "Family Medicine",
    "experience": "15 years",
    "source": "CPSO",
    "sourceId": "127686",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127687",
    "name": "Dr. Michael Chen",
    "address": "456 Health Street, Toronto, ON M4Y 1K8",
    "phone": "(416) 555-0102",
    "speciality": "Cardiology",
    "experience": "12 years",
    "source": "CPSO",
    "sourceId": "127687",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127688",
    "name": "Dr. Emily Patel",
    "address": "789 Wellness Ave, Toronto, ON M6J 1H4",
    "phone": "(416) 555-0103",
    "speciality": "Pediatrics",
    "experience": "8 years",
    "source": "CPSO",
    "sourceId": "127688",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127689",
    "name": "Dr. James Wilson",
    "address": "321 Medical Plaza, Toronto, ON M5T 2S8",
    "phone": "(416) 555-0104",
    "speciality": "Orthopedics",
    "experience": "20 years",
    "source": "CPSO",
    "sourceId": "127689",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127690",
    "name": "Dr. Lisa Kim",
    "address": "654 Health Center Blvd, Toronto, ON M5V 2H1",
    "phone": "(416) 555-0105",
    "speciality": "Dermatology",
    "experience": "10 years",
    "source": "CPSO",
    "sourceId": "127690",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127691",
    "name": "Dr. Robert Brown",
    "address": "987 Medical Way, Toronto, ON M4W 1L7",
    "phone": "(416) 555-0106",
    "speciality": "Neurology",
    "experience": "18 years",
    "source": "CPSO",
    "sourceId": "127691",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127692",
    "name": "Dr. Maria Garcia",
    "address": "147 Health Street, Toronto, ON M5B 1W8",
    "phone": "(416) 555-0107",
    "speciality": "Obstetrics and Gynecology",
    "experience": "14 years",
    "source": "CPSO",
    "sourceId": "127692",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127693",
    "name": "Dr. David Lee",
    "address": "258 Medical Drive, Toronto, ON M6K 3P2",
    "phone": "(416) 555-0108",
    "speciality": "Ophthalmology",
    "experience": "16 years",
    "source": "CPSO",
    "sourceId": "127693",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127694",
    "name": "Dr. Jennifer Taylor",
    "address": "369 Wellness Road, Toronto, ON M5J 2T3",
    "phone": "(416) 555-0109",
    "speciality": "Psychiatry",
    "experience": "11 years",
    "source": "CPSO",
    "sourceId": "127694",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127695",
    "name": "Dr. Ahmed Hassan",
    "address": "741 Medical Circle, Toronto, ON M4Y 2W5",
    "phone": "(416) 555-0110",
    "speciality": "Internal Medicine",
    "experience": "13 years",
    "source": "CPSO",
    "sourceId": "127695",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127696",
    "name": "Dr. Sophia Wong",
    "address": "852 Health Avenue, Toronto, ON M5V 3L9",
    "phone": "(416) 555-0111",
    "speciality": "Endocrinology",
    "experience": "9 years",
    "source": "CPSO",
    "sourceId": "127696",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127697",
    "name": "Dr. Thomas Anderson",
    "address": "963 Medical Street, Toronto, ON M6G 1B7",
    "phone": "(416) 555-0112",
    "speciality": "Urology",
    "experience": "17 years",
    "source": "CPSO",
    "sourceId": "127697",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127698",
    "name": "Dr. Olivia Martinez",
    "address": "159 Health Drive, Toronto, ON M5T 1P9",
    "phone": "(416) 555-0113",
    "speciality": "Rheumatology",
    "experience": "12 years",
    "source": "CPSO",
    "sourceId": "127698",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127699",
    "name": "Dr. William Thompson",
    "address": "357 Medical Road, Toronto, ON M4Y 1K2",
    "phone": "(416) 555-0114",
    "speciality": "Gastroenterology",
    "experience": "15 years",
    "source": "CPSO",
    "sourceId": "127699",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  },
  {
    "id": "127700",
    "name": "Dr. Isabella Rossi",
    "address": "486 Wellness Street, Toronto, ON M5V 2H7",
    "phone": "(416) 555-0115",
    "speciality": "Pulmonology",
    "experience": "10 years",
    "source": "CPSO",
    "sourceId": "127700",
    "lastUpdated": "2024-03-21T00:00:00.000Z",
    "version": "1.0.0"
  }
];

module.exports = doctors; 