/* eslint-disable no-console */

const fs = require('fs');

const fromFile = process.argv[2];
const toFile = process.argv[3];

fs.readFile(fromFile, 'utf8', (err, data) => {
  if (err) throw err;
  const content = data;

  fs.writeFile(toFile, content + '\n', err => {
    if (err) throw err;
    console.log('successful!!');
  });
});
