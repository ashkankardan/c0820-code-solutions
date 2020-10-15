const express = require('express');
const app = express();

const studentData = [
  {
    id: 1,
    name: 'Ashkan Kardan',
    course: 'JavaScript',
    grade: 99
  },
  {
    id: 2,
    name: 'Jamie Hizenberg',
    course: 'Chemistry',
    grade: 100
  }
];

app.get('/api/grades', (req, res) => {
  res.json(studentData);
});

app.delete('/api/grades/:id', (req, res) => {
  const ObjIndex = studentData.findIndex(item => item.id === req.params.id);
  studentData.splice(ObjIndex, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
