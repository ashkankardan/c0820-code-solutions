/* eslint-disable no-unused-vars */

const reverseWord = word => {
  let reversed = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
};
