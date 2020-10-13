const express = require('express');
const app = express();

app.use(function (req, res, next) {
  res.send('Heyyyyyy, World!!');
  next();
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
