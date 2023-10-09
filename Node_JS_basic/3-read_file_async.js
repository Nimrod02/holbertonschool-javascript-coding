const fs = require('fs');

async function countStudents(path) {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }

    const lines = data.split('\n').slice(1).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });

    const cs = lines.filter((student) => student.field === 'CS');
    const swe = lines.filter((student) => student.field === 'SWE');

    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of CS students: ${cs.length}. List: ${cs.map((student) => student.firstname).join(', ')}`);
    console.log(`Number of SWE students: ${swe.length}. List: ${swe.map((student) => student.firstname).join(', ')}`);
  });
}
module.exports = countStudents;
