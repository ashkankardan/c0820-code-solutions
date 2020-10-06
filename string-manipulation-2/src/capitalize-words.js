/* eslint-disable no-unused-vars */

const capitalizeWords = string => {
  let newStr = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] === ' ' || string[i - 1] === undefined) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
  }
  return newStr;
};
