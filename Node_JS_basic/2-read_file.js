const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n');
    const lines = data.slice(1).filter(Boolean).map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age, field,
      };
    });
    const cs = lines.filter((student) => student.field === 'CS');
    const swe = lines.filter((student) => student.field === 'SWE');

    console.log(`Number of students: ${lines.length}`);
    console.log(`Number of students in CS: ${cs.length}. List: ${cs.map((student) => student.firstname).join(', ')}`);
    console.log(`Number of students in SWE: ${swe.length}. List: ${swe.map((student) => student.firstname).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
