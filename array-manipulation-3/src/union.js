/* eslint-disable no-unused-vars */

const union = (first, second) => {
  const resultArr = [];
  for (let i = 0; i < first.length; i++) {
    if (!resultArr.includes(first[i])) {
      resultArr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (!resultArr.includes(second[i])) {
      resultArr.push(second[i]);
    }
  }
  return resultArr;
};
