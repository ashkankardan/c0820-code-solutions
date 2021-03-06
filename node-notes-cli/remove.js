/* eslint-disable no-console */
const fs = require('fs');

module.exports = (file, userInput) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    delete dataObj.notes[userInput];
    const newDataStr = JSON.stringify(dataObj, null, 2);

    fs.writeFile(file, newDataStr, 'utf8', err => {
      if (err) throw err;
    });
  });
};
