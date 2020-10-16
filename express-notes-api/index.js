const express = require('express');
const app = express();
const fs = require('fs');
app.use(express.json());

const data = require('./data.json');
const notes = data.notes;

app.get('/api/notes', (req, res) => {
  const notesArr = [];
  for (const item in notes) {
    notesArr.push(notes[item]);
  }
  res.send(notesArr);
});

app.get('/api/notes/:id', (req, res) => {
  const parsedId = parseInt(req.params.id, 10);
  if (notes[parsedId] !== undefined) {
    res.send(notes[parsedId]);
  } else if (isNaN(parsedId)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else {
    res.status(404).send({
      error: `cannot find note with id ${parsedId}`
    });
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body.content !== undefined) {
    const newNote = {
      id: data.nextId,
      content: req.body.content
    };
    notes[data.nextId] = newNote;
    data.nextId++;
    const dataStr = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataStr, 'utf8', err => {
      if (err) {
        res.status(505).send({
          error: 'An unexpected error occurred.'
        });
      }
      res.status(201).json(newNote);
    });
  } else {
    res.status(400).send({
      error: 'content is a required field'
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  if (notes[parsedId] !== undefined) {
    delete notes[parsedId];

    const dataStr = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataStr, 'utf8', err => {
      if (err) {
        res.status(505).send({
          error: 'An unexpected error occurred.'
        });
      }
    });
    res.sendStatus(204);
  } else if (isNaN(parsedId)) {
    res.status(400).send({
      error: 'id must be a positive integer'
    });
  } else {
    res.status(404).send({
      error: `cannot find note with id ${parsedId}`
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const parsedId = parseInt(req.params.id, 10);

  if (notes[parsedId] === undefined) {
    if (isNaN(parsedId)) {
      res.status(400).send({
        error: 'id must be a positive integer'
      });
    } else if (!isNaN(parsedId)) {
      res.status(404).send({
        error: `cannot find note with id ${parsedId}`
      });
    }
  } else if (req.body.content === undefined) {
    res.status(400).send({
      error: 'content is a required field'
    });
  } else {
    notes[parsedId].content = req.body.content;
    const dataStr = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', dataStr, 'utf8', err => {
      if (err) {
        res.status(505).send({
          error: 'An unexpected error occurred.'
        });
      }
      res.status(200).json(notes[parsedId]);
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
