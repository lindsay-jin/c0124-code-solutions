# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?
  when you have to output a list without knowing how many items there are

- Why is it important for React components to be data-driven?
  reusability, data gets updated

- Where in the component code would a list of React components typically be built?
  JSX, ul

- What `Array` method is commonly used to create a list of React components?
  map() and filter()

- Why do components in a list need to have unique keys?
  JSX elements directly inside a map() call always need keys.
  keys are identifiers for the items in array, it's especially helpful when they get rearranged

- What is the best value to use as a "key" prop when rendering lists?
  index if the list is fixed

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
