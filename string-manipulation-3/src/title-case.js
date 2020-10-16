/* eslint-disable no-unused-vars */

const string = 'speaking Javascript: an in-depth guide for programmers';

const titleCase = string => {
  const specialCategory = [
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to',
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the'
  ];

  let titleArr = [];
  let subTitleArr = [];
  if (string.split(':')[1] !== undefined) {
    let tempTitleArr = [];
    let tempSubTitleArr = [];
    tempTitleArr = string.split(':')[0];
    titleArr = tempTitleArr.split(' ');

    tempSubTitleArr = string.split(':')[1];
    subTitleArr = tempSubTitleArr.split(' ').slice(1);
  } else {
    subTitleArr = string.split(' ');
  }

  const subTitleCapArr = [];
  subTitleCapArr.push(
    subTitleArr[0][0].toUpperCase() + subTitleArr[0].slice(1)
  );
  for (let i = 1; i < subTitleArr.length; i++) {
    if (!specialCategory.includes(subTitleArr[i])) {
      if (subTitleArr[i].includes('-')) {
        subTitleCapArr.push(
          subTitleArr[i].split('-')[0][0].toUpperCase() +
            subTitleArr[i].split('-')[0].slice(1) +
            '-' +
            subTitleArr[i].split('-')[1][0].toUpperCase() +
            subTitleArr[i].split('-')[1].slice(1)
        );
      } else if (subTitleArr[i].toLowerCase() === 'javascript') {
        subTitleCapArr.push('JavaScript');
      } else if (subTitleArr[i].toLowerCase() === 'api') {
        subTitleCapArr.push('API');
      } else {
        subTitleCapArr.push(
          subTitleArr[i][0].toUpperCase() + subTitleArr[i].slice(1)
        );
      }
    } else {
      subTitleCapArr.push(subTitleArr[i]);
    }
  }

  const titleCapArr = [];
  if (titleArr.length > 0) {
    if (
      titleArr[0].toLowerCase() !== 'javascript' &&
      titleArr[0].toLowerCase() !== 'api'
    ) {
      titleCapArr.push(titleArr[0][0].toUpperCase() + titleArr[0].slice(1));

      for (let i = 1; i < titleArr.length; i++) {
        if (titleArr[i].toLowerCase() === 'javascript') {
          titleCapArr.push('JavaScript');
        } else if (titleArr[i].toLowerCase() === 'api') {
          titleCapArr.push('API');
        } else {
          titleCapArr.push(titleArr[i]);
        }
      }
    } else {
      for (let i = 0; i < titleArr.length; i++) {
        if (titleArr[i].toLowerCase() === 'javascript') {
          titleCapArr.push('JavaScript');
        } else if (titleArr[i].toLowerCase() === 'api') {
          titleCapArr.push('API');
        } else {
          titleCapArr.push(titleArr[i]);
        }
      }
    }
  }

  let newStr = '';
  if (titleCapArr.length > 0) {
    for (let i = 0; i < titleCapArr.length; i++) {
      newStr += titleCapArr[i] + ' ';
    }
    newStr = newStr.slice(0, -1) + ': ';
    for (let i = 0; i < subTitleCapArr.length; i++) {
      newStr += subTitleCapArr[i] + ' ';
    }
    newStr = newStr.slice(0, -1);
  } else {
    for (let i = 0; i < subTitleCapArr.length; i++) {
      newStr += subTitleCapArr[i] + ' ';
    }
    newStr = newStr.slice(0, -1);
  }

  return newStr;
};
