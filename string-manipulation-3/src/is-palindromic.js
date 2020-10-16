/* eslint-disable no-unused-vars */

const isPalindromic = string => {
  let str = '';
  let reversedStr = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      str += string[i];
    }
  }

  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      reversedStr += string[i];
    }
  }
  return reversedStr === str;
};
