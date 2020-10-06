/* eslint-disable no-unused-vars */

const numVowels = string => {
  let counter = 0;
  const str = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'o' ||
      str[i] === 'u' ||
      str[i] === 'i' ||
      str[i] === 'e'
    ) {
      counter++;
    }
  }
  return counter;
};
