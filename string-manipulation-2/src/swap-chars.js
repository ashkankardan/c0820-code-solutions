/* eslint-disable no-unused-vars */

const swapChars = (firstIndex, secondIndex, string) => {
  let newStr = '';
  const firstChar = string[firstIndex];
  const secondChar = string[secondIndex];
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newStr += secondChar;
    } else if (i === secondIndex) {
      newStr += firstChar;
    } else {
      newStr += string[i];
    }
  }
  return newStr;
};
