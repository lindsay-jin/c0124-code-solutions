# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?

A tool that lets you connect to PostgreSQL databases directly from Node.js applications,
so Node.js can talk to, query, and manage PostgreSQL databases

- How do you tell `pg` which database to connect to?

you can use a connection string(a URL that specifies the details needed to connect to your PostgreSQL database,
such as the host, database name, user, and password).

const connectionString = 'postgresql://username:password@localhost:5432/databaseName';

Or you can use a configuration object.

```tsx
const { Client } = require('pg');
const client = new Client({
  user: 'username',
  host: 'localhost',
  database: 'databaseName',
  password: 'password',
  port: 5432,
});

client.connect();
```

- How do you send SQL to PostgreSQL from your Express server?

by including an SQL statement

- How do you get the rows return from the SQL query?

by calling db.query with the SQl statement and use result.rows which contains an array of the rows returned from the query.

```tsx
const result = await db.query(sql);
const actors = result.rows;
```

- What must you always remember to put around your asynchronous route handlers? Why?

try catch block, to catch the thrown error

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  It's when an attacker interferes with queries that an application makes to its database
