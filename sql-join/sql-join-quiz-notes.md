# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  a foreign key is the primary key from another table used as a reference

- How do you join two SQL tables? (Provide at least two syntaxes.)
  select \*
  from "products"
  join "suppliers" using ("supplierId");

select \*
from "products"
join "suppliers"
on "products"."supplierId" = "suppliers"."supplierId".

- How do you temporarily rename columns or tables in a SQL statement?
  select column_name as alias_name
  from table_name;

example:
select "customerId" as "Id", "customerName" as "name"
from "customers"

- How do you create a one-to-many relationship between two tables?
  using a foreign key from one table that points to a primary key to another table

- How do you create a many-to-many relationship between two tables?
  by introducing a 3rd table that contains a foreign key to one of the tables and another foreign key to the other table

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
