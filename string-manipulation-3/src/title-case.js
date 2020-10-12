/* eslint-disable no-unused-vars */

const specialCategory = [
  'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to', 'and', 'or', 'nor', 'but', 'a', 'an', 'the'
];

const titleCase = string => {
  let titleArr = [];
  let subTitleArr = [];
  if (string.split(':')[1] !== undefined) {
    let tempTitleArr = [];
    let tempSubTitleArr = [];
    tempTitleArr = string.split(':')[0];
    titleArr = tempTitleArr.split(' ');

    tempSubTitleArr = string.split(':')[1];
    subTitleArr = tempSubTitleArr.split(' ');
  } else {
    subTitleArr = string.split(' ');
  }

  for (let i = 0; i < titleArr.length; i++) {
    const tempWordStr = string[0].toUpperCase() + string.slice(1);

    // -------------->
  }

};
