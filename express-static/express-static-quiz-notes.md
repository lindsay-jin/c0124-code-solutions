# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  to serve static content

- What does `express.static()` return?
  It returns a middleware function that serves the static files with the specified directory

- What are several examples of static files?
  images, videos, HTML pages

- What is a good way to serve application images using Express?
  The images can be placed in the directory served by Express static and you create the middleware function
  that serves those files by using express.static() and then mount the middleware by app.use()

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
