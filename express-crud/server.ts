import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// function validateGradeId(gradeId:string): void {
//   if (!Number.isInteger(+gradeId)) {
//     throw new ClientError(400, `Please use an integer for Id`);
//   }
// }

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select * from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Please use an integer for Id`);
    }

    const sql = `
      select * from "grades"
      where "gradeId" = $1;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const [rows] = result.rows;
    if (!rows) throw new ClientError(404, `Grades not found`);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *;
    `;
    const { name, course, score } = req.body;
    const params = [name, course, score];
    if (!name) {
      throw new ClientError(400, 'Please provide a name.');
    }
    if (!course) {
      throw new ClientError(400, 'Please provide a course.');
    }
    if (!score) {
      throw new ClientError(400, 'Please provide a score.');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'Score has to be an integer from 0 to 100.');
    }
    const result = await db.query(sql, params);
    const [rows] = result.rows;
    if (!rows) throw new ClientError(404, `Grade Id does not exist`);
    res.status(201).json(rows);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Please use an integer for Id`);
    }
    const sql = `
      update "grades"
      set "name" = $1,
      "course" = $2,
      "score" = $3
      where "gradeId" = $4
      returning *;
    `;
    const { name, course, score } = req.body;
    const params = [name, course, score, gradeId];
    if (!name) {
      throw new ClientError(400, 'Please provide a name.');
    }
    if (!course) {
      throw new ClientError(400, 'Please provide a course.');
    }
    if (!score) {
      throw new ClientError(400, 'Please provide a score.');
    }
    if (score < 0 || score > 100) {
      throw new ClientError(400, 'Score has to be an integer from 0 to 100.');
    }
    const result = await db.query(sql, params);
    const [rows] = result.rows;
    if (!rows) throw new ClientError(404, `Grade Id does not exist`);
    res.status(200).json(rows);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, `Please use an integer for Id`);
    }
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;
    `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const [rows] = result.rows;
    if (!rows) throw new ClientError(404, `Grade Id does not exist`);
    res.status(204).json(rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
