/* eslint-disable no-unused-vars */

const dropRight = (array, count) => {
  const newArr = [];
  if (array.length !== 0) {
    for (let i = 0; i < array.length - count; i++) {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
