# sql-select-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is SQL and how is it different from languages like JavaScript?
  Structured Query Language, the primary way of interacting with relational databases.
  It is a declarative language instead of imperative like Javascript.
  It is used to retrieve, create and manipulate data in a relational database.

- How do you retrieve specific columns from a database table?
  select "column name" from "table name";
  select \* from "table name"; - select all columns

- How do you filter rows based on some specific criteria?
  using the 'where' keyword following from "table name"
  select "productId",
  "name",
  "price"
  from "products"
  where "category" = 'cleaning';

- What are the benefits of formatting your SQL?
  consistency, readability

- What are four comparison operators that can be used in a `where` clause?
  =, !=, <, >

- How do you limit the number of rows returned in a result set?
  using the 'limit' keyword with a number

select "name",
"description"
from "products"
order by "price" desc
limit 1;

- How do you retrieve all columns from a database table?
  select \* from "table name";

- How do you control the sort order of a result set?
  order by

select \*
from "products"
order by "price";

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
