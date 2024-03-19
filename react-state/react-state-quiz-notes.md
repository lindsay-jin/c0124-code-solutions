# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  a function that is used to add state functionality into individual components so that the state can be used to persist data between component calls and schedule component re-renders.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Hooks can only be called by React components and other hooks, which means you cannot call hooks in nested functions or conditional statements

- What is the purpose of state in React?
  React persists state variable values between re-renders of a component so the data can be stored and reused

- Why can't we just maintain state in a local variable?
  If you change a local variable, React doesn't know that a re-render should occur.
  Local variables are re-initialized on every render, losing their state between renders.

- What two actions happen when you call a `state setter` function?
  schedule to update state, triggers re-render

- When does the local `state variable` get updated with the new value?
  After the component re-renders.

- How to handle the cycling of the image, image caption, and image description so that one click can advance them all in sync?
  manage the state that changes image, caption and description in a parent component that contains each individual component

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
