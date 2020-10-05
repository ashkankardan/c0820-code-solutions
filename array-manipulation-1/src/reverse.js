/* eslint-disable no-unused-vars */

const reverse = array => {
  const newArr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i]);
  }
  return newArr;
};
