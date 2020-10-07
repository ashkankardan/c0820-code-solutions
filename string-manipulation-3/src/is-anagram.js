/* eslint-disable no-unused-vars */

const isAnagram = (firstString, secondString) => {
  let anagram = false;
  const tempArr = [];
  const tempArr2 = [];

  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      tempArr.push(firstString[i]);
    }
  }

  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      tempArr2.push(secondString[i]);
    }
  }

  if (tempArr.length === tempArr2.length) {
    for (let i = 0; i < tempArr2.length; i++) {
      for (let j = 0; j < tempArr.length; j++) {
        if (tempArr2[i] === tempArr[j]) {
          anagram = true;
          tempArr.splice(j, 1);
        }
      }

    }
  }

  console.log(tempArr);
  console.log(tempArr2);
  return anagram;
};
