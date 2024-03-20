# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  an action that can be handled using functions in components

- What is an "event handler"? Which component declares the handler?
  An event handler is a function that is triggered in response to an event. The component that needs to respond to a specific event will declare the handler. Usually, the parent component declares the handler, and passes it down to child as event handler prop

- How do you pass an event handler to a React component?
  by adding the prop to the element in JSX and assign it a function that you want it to call when the event happens.

- What is the naming convention for event handlers?
  handle followed by the event

- What is an "event handler prop"? Which component declares the prop?
  attributes on JSX elements that adds functionality or event listeners
  A prop passed to a component to handle events. It is a function that is declared in one component and passed down to another component as prop

- What are some custom event handler props a component may wish to define?
  handleClick, an event handler prop that handles what happens when it was clicked on

- What is the naming convention for custom event handler props?
  on prefix followed by the event.

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
