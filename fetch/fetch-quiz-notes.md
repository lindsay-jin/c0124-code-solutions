# fetch-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What does `fetch()` return?
  A Promise that resolves to a Response object.

- What is the default request method used by `fetch()`?
  GET

- How do you specify the request method (`GET`, `POST`, etc.) when calling `fetch`?
  use the options object and use the method property.
  method: "POST", // \*GET, POST, PUT, DELETE, etc. inside the async function

- How does `fetch` report errors?
  check res.ok before extracting the JSON and throw a new Error if it's not ok. check res.status to see why it failed.

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
