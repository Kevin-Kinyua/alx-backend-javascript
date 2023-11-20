// Reading a file synchronously with Node JS

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the database file synchronously
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    // Parse CSV data and count students in each field
    const students = lines.map(line => line.split(','));
    const fields = students[0];

    console.log(`Number of students: ${students.length - 1}`);

    fields.forEach((field, index) => {
      const studentsInField = students.slice(1).map(student => student[index]);
      console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.join(', ')}`);
    });
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
}

// Example usage
countStudents('database.csv');
