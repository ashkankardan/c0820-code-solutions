/* eslint-disable no-unused-vars */

const getValues = object => {
  const valArr = [];
  for (var key in object) {
    valArr.push(object[key]);
  }
  return valArr;
};
