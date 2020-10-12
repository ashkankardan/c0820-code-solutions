/* eslint-disable no-console */
const fs = require('fs');

const fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
