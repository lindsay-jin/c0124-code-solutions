# typescript-methods-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to check to see if there's any errors in our code.

- What is a method?
  a method is a function which is a property of an object.

- How is a method different from any other function?
  a method is a function associated with an object. It is defined as a property of an object and can be called on that object. A function is a standalone code block that is defined independently of objects.

- How do you remove the last element from an array?
  pop() method

- How do you round a number down to the nearest integer?
  Math.round()

- How do you generate a random number?
  Math.random()

- How do you delete an element from an array?
  pop(), shift(), splice()

- How do you append an element to an array?
  push(), unshift()

- How do you break a string up into an array?
  split() method will split a string into an array of substrings based on a specified delimiter.

- Do string methods change the original string? How would you check if you weren't sure?
  sometimes. The original string remains unchanged when split() method is used on a string,
  but in other times such as pop() will change the original string.
  you can console.log() the original string to check

- Roughly how many string methods are there according to the MDN Web docs?
  55

- Is the return value of a function or method useful in every situation?
  return values provide results or data such as a calculation or a boolean result.
  Any code comes after a return statement stops running

- Roughly how many array methods are there according to the MDN Web docs?
  30

- How do you get a collection of an objects keys?
  Object.keys(objectName)

- How do you get a collection of an objects values?
  Object.values(objectName)

- How do you get a collection of both an objects keys and values?
  Object.entries(objectName)

- What three-letter acronym should you always include in your Google search about a JavaScript method or CSS property?
  MDN

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
