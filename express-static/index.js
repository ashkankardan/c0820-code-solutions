const express = require('express');
const path = require('path');
const app = express();

const absolutePath = path.join(__dirname, 'public');
const serveFiles = express.static(absolutePath);
app.use(serveFiles);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');

});
