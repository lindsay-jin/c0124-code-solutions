# css-positioning-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the **default** value for the `position` property of HTML elements?
  static position

- How does setting `position: relative` on an element affect document flow?
  It doesn't affect the normal flow.

- How does setting `position: relative` on an element affect where it appears on the page?
  It will stack on top of the other elements

- How does setting `position: absolute` on an element affect document flow?
  An absolutely positioned element does not exist on normal document flow. It sits on its own layer separate from everything else.

- How does setting `position: absolute` on an element affect where it appears on the page?
  it sets the position of the element relative to its nearest ancestor element.

- How do you constrain an absolutely positioned element to a containing block?
  The containing block has to have a position other than static, then set the element with position: absolute and set a specific position using top, bottom, left and right properties

- What are the four box offset properties?
  top, bottom, left and right

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
