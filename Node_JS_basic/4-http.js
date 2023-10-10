const http = require('http');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245);

console.log('Server is running');

module.exports = app;
