/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const promiseObj = takeAChance('Ashkan');

promiseObj.then(value => {
  console.log(value);
});

promiseObj.catch(error => {
  console.error(error);
});
