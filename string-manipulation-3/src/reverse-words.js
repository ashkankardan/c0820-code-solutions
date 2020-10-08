/* eslint-disable no-unused-vars */

const reverseWords = string => {
  const wordsArr = string.split(' ');
  const newArr = [];
  const reveresedStr = '';
  for (let i = 0; i < wordsArr; i++) {
    let reversedWord = '';
    for (let j = wordsArr[i].length - 1; j >= 0; j--) {
      reversedWord += wordsArr[i][j];
    }
    newArr.push(reversedWord);
  }
  for (let k = 0; k < newArr.length; k++) {
    reveresedStr += `${newArr[k]} `;
  }
  return reveresedStr;
};
