const request = require('request');

request.get(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(`error: ${error}`);
  } else {
    const result = JSON.parse(body).results;
    let movies = 0;
    for (let index = 0; index < result.length; index++) {
      const characters = result[index].characters;
      for (let index2 = 0; index2 < characters.length; index2++) {
        if (characters[index2].includes('18')) {
          movies++;
        }
      }
    }

    console.log(movies);
  }
});
