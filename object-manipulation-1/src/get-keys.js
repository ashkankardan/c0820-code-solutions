/* eslint-disable no-unused-vars */

const getKeys = object => {
  const keyArr = [];
  for (var key in object) {
    keyArr.push(key);
  }
  return keyArr;
};
