const express = require('express');
const app = express();
const studentData = [
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  },
  {
    id: 2,
    name: 'Smaal Fishi',
    course: 'Roboting Dance',
    grade: 1009
  }
];

app.get('/api/grades', (req, res) => {
  res.send(studentData);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
