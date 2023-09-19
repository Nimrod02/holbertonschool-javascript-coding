#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function(err, data) {
    if (err) {
        console.error(`An error occurred: ${err}`);
    } else {
        console.log(data);
    }
});
