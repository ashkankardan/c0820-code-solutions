import React from 'react';
import ReactDom from 'react-dom';

const rootEl = document.querySelector('#root');

function CustomButton() {
  return <button>Click Me!</button>;
}

ReactDom.render(
  <CustomButton />, rootEl
);
