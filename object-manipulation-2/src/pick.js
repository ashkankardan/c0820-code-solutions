/* eslint-disable no-unused-vars */

const pick = (source, keys) => {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      newObj[keys[i]] = source[keys[i]];
    }
  }
  return newObj;
};
