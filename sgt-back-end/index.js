const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

const app = express();

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });

});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const grade = req.body.grade;
  if (!Number.isInteger(grade) || grade <= 0) {
    res.status(400).json({
      error: '"grade" must be a positive integer'
    });
  }

  const sql = `
    insert into "grades"(name, course, grade)
    values ($1, $2, $3)
    returning *
  `;

  const values = [name, course, grade];

  db.query(sql, values)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const grade = req.body.grade;
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  if (!Number.isInteger(grade) || grade <= 0) {
    res.status(400).json({
      error: '"grade" must be a positive integer'
    });
  }
  if (name === undefined) {
    res.status(400).json({
      error: 'please provide a valid name'
    });
  }
  if (course === undefined) {
    res.status(400).json({
      error: 'please provide a valid course'
    });
  }

  const sql = `
    update "grades"
       set "name" = $1,
           "course" = $2,
           "grade" = $3
     where "gradeId" = $4
     returning *
  `;

  const values = [name, course, grade, gradeId];

  db.query(sql, values)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({
          error: 'The grade row was not found!'
        });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }

  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;

  const values = [gradeId];

  db.query(sql, values)
    .then(result => {
      if (result.rows[0] === undefined) {
        res.status(404).json({
          error: 'The grade row was not found!'
        });
      } else {
        res.status(204).json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port: 3000');
});
