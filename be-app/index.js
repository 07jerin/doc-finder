const express = require('express');
const cors = require('cors');
const { getDoctors, reloadDoctors } = require('./data/doctors');
const { loadDoctors } = require('./loadDoctors');

const app = express();
const port = process.env.PORT || 3001;

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'], // Add your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running' });
});

// Doctors endpoint with pagination and filtering
app.get('/api/doctors', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const searchName = req.query.name?.toLowerCase() || '';
  const searchSpeciality = req.query.speciality?.toLowerCase() || '';

  // Get current doctors data
  const doctors = getDoctors();

  // Filter doctors based on search criteria
  let filteredDoctors = doctors.filter(doctor => {
    const nameMatch = doctor.name.toLowerCase().includes(searchName);
    const specialityMatch = doctor.speciality.toLowerCase().includes(searchSpeciality);
    return nameMatch && specialityMatch;
  });

  // Calculate pagination
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const totalDoctors = filteredDoctors.length;
  const totalPages = Math.ceil(totalDoctors / limit);

  // Get paginated results
  const paginatedDoctors = filteredDoctors.slice(startIndex, endIndex);

  res.json({
    doctors: paginatedDoctors,
    pagination: {
      currentPage: page,
      totalPages,
      totalDoctors,
      limit
    }
  });
});

// Get single doctor by ID
app.get('/api/doctors/:id', (req, res) => {
  const doctors = getDoctors();
  const doctor = doctors.find(d => d.id === req.params.id);
  if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
  res.json(doctor);
});

// Endpoint to trigger doctor loading
app.post('/api/load-doctors', async (req, res) => {
  try {
    const loadedDoctors = await loadDoctors();
    await reloadDoctors(); // Reload the doctors data after loading new data
    res.json({ 
      message: 'Doctors loaded successfully',
      count: loadedDoctors.length
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error loading doctors',
      error: error.message 
    });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 