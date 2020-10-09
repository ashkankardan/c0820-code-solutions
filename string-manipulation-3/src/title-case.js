/* eslint-disable no-unused-vars */

const titleCase = string => {
  let titleArr = [];
  let subTitleArr = [];
  if (string.split(':')[1] !== undefined) {
    titleArr = string.split(':')[0];
    subTitleArr = string.split(':')[1];
  } else {
    subTitleArr = string.split(':')[0];
  }

  for (let i = 0; i < titleArr.length; i++) {
    const tempWordStr = string[0].toUpperCase() + string.slice(1);

    // -------------->
  }

};
