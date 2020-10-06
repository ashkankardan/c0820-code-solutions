/* eslint-disable no-unused-vars */

const chunk = (array, size) => {
  const resultArr = [];
  let chunked = 0;
  while (chunked < array.length) {
    const chunkArr = [];
    for (let j = 0; j < size; j++) {
      if (chunked < array.length) {
        chunkArr.push(array[chunked]);
      }
      chunked++;
    }
    resultArr.push(chunkArr);
  }
  return resultArr;
};
