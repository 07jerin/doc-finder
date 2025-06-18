const { getCurrentData } = require('../utils/dataVersioning');

// Initialize doctors data
let doctors = [];

// Load the current version of doctors data
async function loadDoctorsData() {
  try {
    doctors = await getCurrentData();
  } catch (error) {
    console.error('Error loading doctors data:', error);
    doctors = [];
  }
}

// Load data immediately
loadDoctorsData();

module.exports = {
  getDoctors: () => doctors,
  reloadDoctors: loadDoctorsData
};