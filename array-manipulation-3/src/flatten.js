/* eslint-disable no-unused-vars */

const flatten = array => {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    // if (array[i].length > 0 && typeof array[i] !== 'string') {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArr.push(array[i][j]);
      }
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
