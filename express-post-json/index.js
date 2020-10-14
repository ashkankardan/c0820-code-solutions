const express = require('express');
const app = express();
app.use(express.json());

const grades = [];
let nextId = 1;

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  newEntry(req.body);
  res.status(201).send(grades);
});

const newEntry = data => {
  data.id = nextId;
  grades.push(data);
  nextId++;
};

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
