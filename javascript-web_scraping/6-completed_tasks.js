#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error : ${error}`);
  } else {
    const todos = JSON.parse(body);

    const completedTasksByUser = {};

    todos.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    const formattedOutput = {};

    for (const key in completedTasksByUser) {
      formattedOutput[key] = completedTasksByUser[key];
    }

    const formattedOutputString = JSON.stringify(formattedOutput, null, 2)
      .replace(/"(\d+)":/g, "'$1':");

    console.log(formattedOutputString);
  }
});
