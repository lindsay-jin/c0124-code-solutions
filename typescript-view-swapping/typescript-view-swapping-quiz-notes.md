# typescript-view-swapping-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  the element that triggers the event

- What is the affect of setting an element to `display: none`?
  doesn't show up on the screen

- What does the `element.matches()` method take as an argument and what does it return?
  css selector, returns the element with that css selector

- How can you retrieve the value of an element's attribute?
  getAttribute()

- At what steps of the solution would it be helpful to log things to the console?
  anytime, whenever you want to check something, like what is a variable that you had set and see if it's correct

- If you were to add another tab and view to your HTML, but you didn't use event delegation, how would your JavaScript code be written instead?
  you would need an event listener on every tab

- If you didn't use a loop to conditionally show or hide the views in the page, how would your JavaScript code be written instead?
  check if tab clicked is the event target, then assign a class of display: none to tabs that are not clicked

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
