# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  It is the element which the event is being triggered on. This is the most deeply nested element.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  bubbling. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

- What DOM element property tells you what type of element it is?
  tagName

- What does the `element.closest()` method take as its argument and what does it return?
  a css selector, returns itself or the closet ancestor element that matches that css selector.

- How can you remove an element from the DOM?
  element.remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  by adding an event listener to the parent item of the elements

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
