import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

ReactDOM.render(heading, document.querySelector('#root'));
