/* eslint-disable no-unused-vars */

const difference = (first, second) => {
  const resultArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      resultArr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!first.includes(second[i])) {
      resultArr.push(second[i]);
    }
  }
  return resultArr;
};
