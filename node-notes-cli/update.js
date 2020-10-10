/* eslint-disable no-console */
const fs = require('fs');

module.exports = (file, updateId, updateInput) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    const dataObj = JSON.parse(data);
    dataObj.notes[updateId] = updateInput;
    const newDataStr = JSON.stringify(dataObj, null, 2);

    fs.writeFile(file, newDataStr, 'utf8', err => {
      if (err) throw err;
    });
  });
};
