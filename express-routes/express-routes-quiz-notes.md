# express-hello-world-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is Express middleware?
  express maps routes to functions using middleware, which is an array of functions that fulfills the requested actions.
  These functions can modify request and response objects, end the request-response cycle, and call the next middleware function in the stack.

- What is Express middleware useful for?
  Execute any code.
  Make changes to the request and the response objects.
  End the request-response cycle.
  Call the next middleware function in the stack.

- How do you mount a middleware with an Express application?
  app.use()

- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req, res, next

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
