/* eslint-disable no-unused-vars */

// const take = (array, count) => {
//   const newArr = [];
//   if (array.length !== 0) {
//     for (let i = 0; i < count; i++) {
//       newArr.push(array[i]);
//     }
//   }
//   return newArr;
// };

// or

const take = (array, count) => {
  const newArr = array.slice(0, count);
  return newArr;
};
