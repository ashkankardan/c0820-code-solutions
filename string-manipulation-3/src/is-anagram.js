/* eslint-disable no-unused-vars */

const isAnagram = (firstString, secondString) => {
  const firstArr = [];
  const secondArr = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      firstArr.push(firstString[i]);
    }
  }

  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      secondArr.push(secondString[i]);
    }
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (secondArr.indexOf(firstArr[i]) !== -1) {
      secondArr.splice(secondArr.indexOf(firstArr[i]), 1);
      firstArr.splice(i, 1);
    } else if (secondArr.indexOf(firstArr[i]) === -1) {
      return false;
    }
  }

  if (firstArr.length !== secondArr.length) {
    return false;
  }

  return true;
};
