#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

fs.readFile(filePath, 'utf-8', function(err, data) {
        if (err) {
                console.log('error');
        } else {
                console.log(data);
        }
})