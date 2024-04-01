# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create Insert: adding rows to a table
  Read Select
  Update Update: updating rows
  Delete Delete

- How do you add a row to a SQL table?
  insert into "table name" ("column name", "column name")
  values ('value name', 'value name')

- How do you add multiple rows to a SQL table at once?
  by adding commas after each set of values

- How do you update rows in a database table?
  update "products"
  set "price" = 200,
  "name" = 'Super ShakeWeight',
  "description" = 'Makes you ULTRA strong!'
  where "productId" = 24;

- How do you delete rows from a database table?
  delete
  from "products"
  where "category" = 'cleaning'
  and "price" < 20

- Why is it important to include a `where` clause in your `update` and `delete` statements?
  otherwise every row gets affected

- How do you accidentally delete or update all rows in a table?
  no 'where' clause

- How do you get back the modified row without a separate `select` statement?
  returning

- Why did you get an error when trying to delete certain films?
  because at least one of the films we tried to delete is being referenced from the castMembers table

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
