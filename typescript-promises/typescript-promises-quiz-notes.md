# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?
  when an event occurs, the associated callback functions are not executed immediately but placed in an event queue.
  The event loop checks the call stack and the event queue and if the call stack is empty, it takes the first callback function from the event queue and pushes it onto the call stack and executes it.

- What are the three states a Promise can be in?
  pending: initial state, neither fulfilled nor rejected.
  fulfilled: meaning that the operation was completed successfully.
  rejected: meaning that the operation failed.

- How do you handle the fulfillment of a Promise?
  use .then() method and pass in a callback function to handle fulfilled case of the promise

- How do you handle the rejection of a Promise?
  use .catch() method and pass in a callback function to handle rejected case of the promise

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
