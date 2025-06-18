const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');

const CPSO_BASE_URL = 'https://doctors.cpso.on.ca/DoctorDetails';
const DOCTORS_FILE = path.join(__dirname, 'data', 'doctors.js');

const headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Accept-Encoding': 'gzip, deflate, br',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Cache-Control': 'max-age=0'
};

async function fetchDoctorData(cpsoNumber) {
    try {
        const response = await axios.get(`${CPSO_BASE_URL}/${cpsoNumber}`, {
            headers,
            timeout: 10000 // 10 second timeout
        });

        const $ = cheerio.load(response.data);
        
        // Extract doctor information from the HTML
        const name = $('.doctor-name').text().trim();
        const address = $('.practice-location').text().trim();
        const phone = $('.phone-number').text().trim();
        const speciality = $('.specialty').text().trim();

        return {
            id: cpsoNumber,
            name: name || 'Not available',
            address: address || 'Not available',
            phone: phone || 'Not available',
            speciality: speciality || 'Not available',
            experience: 'Not available',
            source: 'CPSO'
        };
    } catch (error) {
        console.error(`Error fetching data for CPSO number ${cpsoNumber}:`, error.message);
        return null;
    }
}

async function loadDoctors() {
    try {
        // Example CPSO numbers - you might want to get these from a database or another source
        const cpsoNumbers = [
            '127686',
            '127687',
            '127688',
            '127689',
            '127690'
        ];

        const doctors = [];
        for (const cpsoNumber of cpsoNumbers) {
            console.log(`Fetching doctor with CPSO number ${cpsoNumber}...`);
            const doctorData = await fetchDoctorData(cpsoNumber);
            if (doctorData) {
                doctors.push(doctorData);
            }
            // Add a delay between requests to avoid overwhelming the server
            await new Promise(resolve => setTimeout(resolve, 2000));
        }

        // Save the doctors data to the file
        const fileContent = `const doctors = ${JSON.stringify(doctors, null, 2)};\n\nmodule.exports = doctors;`;
        await fs.writeFile(DOCTORS_FILE, fileContent);

        console.log(`Successfully loaded ${doctors.length} doctors`);
        return doctors;
    } catch (error) {
        console.error('Error loading doctors:', error);
        throw error;
    }
}

// Export the function for use in other files
module.exports = { loadDoctors };

// If this file is run directly, execute the loadDoctors function
if (require.main === module) {
    loadDoctors()
        .then(() => console.log('Doctor loading completed'))
        .catch(error => console.error('Error:', error));
} 