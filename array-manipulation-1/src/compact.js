/* eslint-disable no-unused-vars */

const compact = array => {
  const newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i] === false) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
