# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
  represents a modal or non-modal dialog box or other interactive component, such as an alert

- How do you show and hide a modal dialog?
  use showModal and close method

- How do you call the dialog element's functions in React?
  First, declare a ref object with an initial value of `null`,
  then pass your ref object as the `ref` attribute to the JSX of the DOM node you want to manipulate,
  and call methods like inputRef.current.focus();

- How do you manipulate child components in React?
  pass prop to a child component to tell it whether or not to render itself.
  use state to keep track of child component
  use refs to get a reference to a child component. You can call a method on the child component or update its props.

- How can you render nested JSX elements in React?
  passing JSX as children and return the nested JSX elements from the parent component

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
