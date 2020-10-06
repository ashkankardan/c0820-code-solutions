/* eslint-disable no-unused-vars */

const capitalizeWord = word => {
  let newStr = '';
  if (word.toLowerCase() === 'javascript') {
    newStr = 'JavaScript';
  } else {
    newStr = word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
  }
  return newStr;
};
