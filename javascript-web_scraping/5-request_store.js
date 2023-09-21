#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const filePath = process.argv[3];

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.error(`error: ${error}`);
  } else {
    fs.writeFile(filePath, body, 'utf-8');
  }
});
