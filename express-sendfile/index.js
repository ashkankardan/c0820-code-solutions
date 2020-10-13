const express = require('express');
const app = express();

app.use((req, res, next) => {
  let filename = '';
  switch (req.originalUrl) {
    case '/index.html':
      filename = '/index.html';
      break;
    case '/styles.css':
      filename = '/styles.css';
      break;
    case '/main.js':
      filename = '/main.js';
      break;
    default:
      next();
  }
  res.sendFile(filename, { root: __dirname }, err => {
    if (err) throw err;
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');
});
