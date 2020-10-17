/* eslint-disable no-unused-vars */

const intersection = (first, second) => {
  const resultArr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      resultArr.push(first[i]);
    }
  }
  return resultArr;
};
