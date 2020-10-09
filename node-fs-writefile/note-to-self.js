/* eslint-disable no-console */

const fs = require('fs');

const userInput = process.argv[2];
const fileName = 'note.txt';

fs.writeFile(fileName, userInput, err => {
  if (err) throw err;
  console.log('successful!');
});
