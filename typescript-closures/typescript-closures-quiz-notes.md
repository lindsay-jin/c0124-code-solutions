# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  When JavaScript creates a function reference, it encloses the current variable scope into that function reference.

- What allows JavaScript functions to "remember" variables from their surroundings?
  closures

- What values does a closure contain?
  The closure contains all the variables that are in scope at the time of creation of the function.
  closure contains everything declared outside a function.

- When is a closure created?
  when a function gets declared. when javascript runtime hits the code that declared it, create a new closure with a function reference

- How can you tell if a function will be created with a closure?
  if it refers to things outside

- In React, what is one important case where you need to know if a closure was created?
  in dependencies

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
