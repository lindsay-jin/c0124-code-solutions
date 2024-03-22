# react-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How do controlled components differ from uncontrolled components?
  A component is "uncontrolled" if it manages its own state. An uncontrolled input component's value is managed by the DOM, not by React or by the programmer. The component's value can be retrieved from the HTMLFormElement when the form is submitted.

A component is "controlled" if its parent manages its state, usually in a useState variable.

- What are some advantages of using uncontrolled components?
  simpler, direct DOM access

- What are some advantages of using controlled components?
  good for complex forms, allows validation checks on every keystroke

- Which style do you prefer?
  uncontrolled, simpler

- What two props must you pass to an input for it to be "controlled"?
  checked: A boolean. For a checkbox input or a radio button, controls whether it is selected.
  value: A string. For a text input, controls its text. (For a radio button, specifies its form data.)
  The value you pass to controlled components should not be undefined or null.

Every controlled input needs an onChange event handler that synchronously updates its backing value.

- What are some popular npm packages for creating forms in React?
  React Hook Form, Formik, and React Final Form

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
