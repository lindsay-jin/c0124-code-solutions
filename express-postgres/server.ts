import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();

pg.types.setTypeParser(pg.types.builtins.NUMERIC, parseFloat);
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select "filmId", "title"
      from films
      order by "replacementCost" desc;
    `;
    const { rows } = await db.query(sql);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(404, 'This film is not in the database.');
    }
    const sql = `
      select "title", "filmId"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId as string];
    const result = await db.query(sql, params);
    const [film] = result.rows;
    if (!film) {
      throw new ClientError(
        404,
        `No matching film with ${filmId} found in the database`
      );
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (filmId === undefined) {
      throw new ClientError(
        404,
        `Film with ${filmId} is not found in the database`
      );
    }
    if (title === undefined) {
      throw new ClientError(
        404,
        `Film with ${title} is not found in the database`
      );
    }
    const sql = `
      update "films"
      set "title" = $2
      where "filmId" = $1
      returning *;
    `;
    const params = [filmId as string, title as string];
    const result = await db.query(sql, params);
    res.send(result);
    if (!result) {
      throw new ClientError(404, `${filmId} not found in the database`);
    }
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
