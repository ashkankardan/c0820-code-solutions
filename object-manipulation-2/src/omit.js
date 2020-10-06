/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  const newObj = {};
  for (const key in source) {
    let keyExist = false;
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === key) {
        keyExist = true;
      }
    }
    if (keyExist === false) {
      newObj[key] = source[key];
    }
  }
  return newObj;
};
