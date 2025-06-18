# Data Versioning Structure

This directory contains versioned data files for doctors' information from different sources.

## Directory Structure

```
versions/
├── current/          # Current active data
│   └── doctors.js    # Currently used data file
├── raw/             # Raw data from different sources
│   ├── cpso/        # Data from CPSO
│   ├── oma/         # Data from OMA
│   └── other/       # Data from other sources
└── processed/       # Processed and merged data
    └── YYYY-MM-DD/  # Date-based versions
```

## Version Naming Convention

- Raw data: `source_YYYYMMDD.js`
- Processed data: `doctors_YYYYMMDD.js`
- Current data: `doctors.js`

## Data Structure

Each data file should export an array of doctor objects with the following structure:

```javascript
{
  id: string,          // Unique identifier
  name: string,        // Doctor's name
  speciality: string,  // Medical speciality
  experience: string,  // Years of experience
  address: string,     // Practice address
  phone: string,       // Contact number
  source: string,      // Data source (e.g., 'CPSO', 'OMA')
  sourceId: string,    // ID from the source
  lastUpdated: string, // Last update timestamp
  version: string      // Data version
}
``` 