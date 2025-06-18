const fs = require('fs').promises;
const path = require('path');

const VERSIONS_DIR = path.join(__dirname, '../data/versions');
const CURRENT_DIR = path.join(VERSIONS_DIR, 'current');
const RAW_DIR = path.join(VERSIONS_DIR, 'raw');
const PROCESSED_DIR = path.join(VERSIONS_DIR, 'processed');

// Ensure all required directories exist
async function ensureDirectories() {
  const dirs = [
    VERSIONS_DIR,
    CURRENT_DIR,
    path.join(RAW_DIR, 'cpso'),
    path.join(RAW_DIR, 'oma'),
    path.join(RAW_DIR, 'other'),
    PROCESSED_DIR
  ];

  for (const dir of dirs) {
    try {
      await fs.access(dir);
    } catch {
      await fs.mkdir(dir, { recursive: true });
    }
  }
}

// Save raw data from a source
async function saveRawData(source, data) {
  const date = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const filename = `${source}_${date}.js`;
  const filepath = path.join(RAW_DIR, source, filename);

  const content = `// Raw data from ${source} - ${date}
const doctors = ${JSON.stringify(data, null, 2)};

module.exports = doctors;`;

  await fs.writeFile(filepath, content);
  return filename;
}

// Save processed data
async function saveProcessedData(data) {
  const date = new Date().toISOString().split('T')[0];
  const dir = path.join(PROCESSED_DIR, date);
  await fs.mkdir(dir, { recursive: true });

  const filename = `doctors_${date.replace(/-/g, '')}.js`;
  const filepath = path.join(dir, filename);

  const content = `// Processed data - ${date}
const doctors = ${JSON.stringify(data, null, 2)};

module.exports = doctors;`;

  await fs.writeFile(filepath, content);
  return filename;
}

// Update current data
async function updateCurrentData(data) {
  const filepath = path.join(CURRENT_DIR, 'doctors.js');
  const content = `// Current data - Last updated: ${new Date().toISOString()}
const doctors = ${JSON.stringify(data, null, 2)};

module.exports = doctors;`;

  await fs.writeFile(filepath, content);
}

// Get current data
async function getCurrentData() {
  try {
    const filepath = path.join(CURRENT_DIR, 'doctors.js');
    const content = await fs.readFile(filepath, 'utf8');
    return eval(content);
  } catch (error) {
    console.error('Error reading current data:', error);
    return [];
  }
}

// Get raw data from a specific source and date
async function getRawData(source, date) {
  try {
    const filepath = path.join(RAW_DIR, source, `${source}_${date}.js`);
    const content = await fs.readFile(filepath, 'utf8');
    return eval(content);
  } catch (error) {
    console.error(`Error reading raw data for ${source} on ${date}:`, error);
    return [];
  }
}

// Get processed data for a specific date
async function getProcessedData(date) {
  try {
    const filepath = path.join(PROCESSED_DIR, date, `doctors_${date.replace(/-/g, '')}.js`);
    const content = await fs.readFile(filepath, 'utf8');
    return eval(content);
  } catch (error) {
    console.error(`Error reading processed data for ${date}:`, error);
    return [];
  }
}

// List all available versions
async function listVersions() {
  const versions = {
    raw: {},
    processed: [],
    current: null
  };

  // List raw versions
  for (const source of ['cpso', 'oma', 'other']) {
    const sourceDir = path.join(RAW_DIR, source);
    try {
      const files = await fs.readdir(sourceDir);
      versions.raw[source] = files
        .filter(f => f.endsWith('.js'))
        .map(f => f.replace('.js', ''));
    } catch (error) {
      versions.raw[source] = [];
    }
  }

  // List processed versions
  try {
    const dates = await fs.readdir(PROCESSED_DIR);
    versions.processed = dates.filter(d => d.match(/^\d{4}-\d{2}-\d{2}$/));
  } catch (error) {
    versions.processed = [];
  }

  // Get current version
  try {
    const currentPath = path.join(CURRENT_DIR, 'doctors.js');
    const stats = await fs.stat(currentPath);
    versions.current = stats.mtime.toISOString();
  } catch (error) {
    versions.current = null;
  }

  return versions;
}

module.exports = {
  ensureDirectories,
  saveRawData,
  saveProcessedData,
  updateCurrentData,
  getCurrentData,
  getRawData,
  getProcessedData,
  listVersions
}; 