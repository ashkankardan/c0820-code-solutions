/* eslint-disable no-console */

const fs = require('fs');

const fileName = 'random.txt';
const randomNumber = Math.random();

fs.writeFile(fileName, randomNumber, err => {
  if (err) throw err;
  console.log('successful!');
});
