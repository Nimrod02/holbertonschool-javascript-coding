const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // 'T' en minuscule ici
  res.end('Hello Holberton School!');
});

app.listen(1245);
