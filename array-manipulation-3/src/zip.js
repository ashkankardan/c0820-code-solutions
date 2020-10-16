/* eslint-disable no-unused-vars */

const zip = (first, second) => {
  const zipped = [];
  for (let i = 0; i < first.length; i++) {
    const tempArr = [];
    if (second[i] !== undefined) {
      tempArr.push(first[i]);
      tempArr.push(second[i]);
      zipped.push(tempArr);
    }
  }
  return zipped;
};
