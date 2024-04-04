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

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
      select "title", "replacementCost"
      from "films"
      order by "replacementCost" desc
      limit 2;
    `;
    const { rows } = await db.query(sql);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/films/:filmId', async (req, res, next) => {
  try {
    const { filmId } = req.params;
    if (!Number.isInteger(+filmId)) {
      throw new ClientError(400, `Bad request`);
    }
    const sql = `
      select "title"
      from "films"
      where "filmId" = $1;
    `;
    const params = [filmId as string];
    const { rows } = await db.query(sql, params);
    const [film] = rows;
    if (!film) {
      throw new ClientError(
        404,
        `No matching film with ${filmId} exist in the database.`
      );
    }
    res.json(film);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
