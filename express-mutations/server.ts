import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

// Endpoint for testing
app.get('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, `Non-integer actorId: ${actorId}`);
    }
    const sql = `
      select * from "actors"
      where "actorId" = $1;
    `;
    const params = [actorId];
    const result = await db.query(sql, params);
    const actor = result.rows[0];
    if (!actor) throw new ClientError(404, `actor ${actorId} not found`);
    res.json(actor);
  } catch (err) {
    next(err);
  }
});

app.post('/api/actors', async (req, res, next) => {
  try {
    const sql = `
      insert into "actors" ("firstName", "lastName")
      values ($1, $2)
      returning *;
    `;
    // console.log('req.body', req.body)
    const params = [req.body.firstName, req.body.lastName];
    if (!req.body.firstName) {
      throw new ClientError(404, 'Please provide a first name.');
    }
    if (!req.body.lastName) {
      throw new ClientError(404, 'Please provide a last name.');
    }
    const { rows } = await db.query(sql, params);
    const [actor] = rows;
    if (!actor) {
      throw new ClientError(400, 'Bad request');
    }
    res.status(201).json(actor);
  } catch (err) {
    next(err);
  }
});

app.put('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(404, 'invalid actor Id');
    }
    const sql = `
      update "actors"
      set "firstName" = $1,
          "lastName" = $2
      where "actorId" = $3
      returning *;
    `;
    const params = [req.body.firstName, req.body.lastName, actorId];

    if (!req.body.firstName) {
      throw new ClientError(404, 'Please provide a first name.');
    }
    if (!req.body.lastName) {
      throw new ClientError(404, 'Please provide a last name.');
    }
    const { rows } = await db.query(sql, params);
    const [actor] = rows;
    if (!actor) {
      throw new ClientError(404, 'Actor does not exist.');
    }
    res.status(200).json(actor);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/actors/:actorId', async (req, res, next) => {
  try {
    const { actorId } = req.params;
    if (!Number.isInteger(+actorId)) {
      throw new ClientError(400, 'Bad request');
    }
    if (actorId === undefined) {
      throw new ClientError(404, 'Invalid actor ID');
    }
    const sql = `
      delete from "actors"
      where "actorId" = $1
      returning *;
    `;
    const params = [actorId];

    const { rows } = await db.query(sql, params);
    const [actor] = rows;
    if (!actor) {
      throw new ClientError(404, 'Actor ID does not exist.');
    }
    res.status(204).json(actor);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
