#!/usr/bin/node

const request = require('request');
const fs = require('fs');

const filePath = process.argv[3];

request.get(process.argv[2], (error, body, result) => {
  if (error) {
    console.error(`error: ${error}`);
  } else {
    fs.writeFile(filePath, body, 'utf-8', (err) => {
      if (err) {
        console.error(`error: ${error}`);
      } else {
        console.log(filePath);
      }
    });
  }
});
