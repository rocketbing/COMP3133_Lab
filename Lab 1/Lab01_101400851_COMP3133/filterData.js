const fs = require('fs');
const csv = require('csv-parser');

// File paths
const inputFile = './input_countries.csv';
const canadaFile = './canada.txt';
const usaFile = './usa.txt';

// Create writable streams for the output files
const canadaStream = fs.createWriteStream(canadaFile);
const usaStream = fs.createWriteStream(usaFile);

// Write headers to the output files
canadaStream.write('Country\tYear\tPopulation\n');
usaStream.write('Country\tYear\tPopulation\n');

// Process the CSV file
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    console.log('Processing row:', row); 
   
    const country = row['country'];
    const year = row['year'];
    const population = row['population'];

    if (country === 'Canada') {
      canadaStream.write(`${country}\t${year}\t${population}\n`);
    } else if (country === 'United States') {
      usaStream.write(`${country}\t${year}\t${population}\n`);
    }
  })
  .on('end', () => {
    console.log('Data processing completed.');
    canadaStream.end();
    usaStream.end();
  })
  .on('error', (err) => {
    console.error('Error reading the file:', err.message);
  });


