/* eslint-disable no-console */
const fs = require('fs');

module.exports = file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    displayNotes(dataObj);
  });
};

const displayNotes = data => {
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
};
