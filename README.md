# Doc-Finder

A web application to search and find doctors in Ontario, Canada. The application provides a user-friendly interface to search for doctors by name and specialty, with detailed information about each doctor.

## Features

- Search doctors by name and specialty
- Paginated results
- Detailed doctor information
- Responsive design
- Expandable rows for additional details

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express
- Data: JSON-based storage

## Project Structure

```
doc-finder/
├── be-app/           # Backend application
│   ├── data/        # Data storage
│   └── index.js     # Main server file
└── fe-app/          # Frontend application
    └── src/         # React source files
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/doc-finder.git
cd doc-finder
```

2. Install backend dependencies:
```bash
cd be-app
npm install
```

3. Install frontend dependencies:
```bash
cd ../fe-app
npm install
```

### Running the Application

1. Start the backend server:
```bash
cd be-app
npm start
```

2. Start the frontend development server:
```bash
cd fe-app
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 