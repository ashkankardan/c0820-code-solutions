/* eslint-disable no-unused-vars */

const unique = array => {
  const resultArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!resultArr.includes(array[i])) {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
};
