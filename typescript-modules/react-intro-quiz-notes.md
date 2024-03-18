# react-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are modules?
  A collection of code that are stored in external files that perform a specific task and can be imported or exported by other modules

- What is the difference between named and default imports?
  Default imports can be named arbitrarily by the importer.
  Named imports must match the export name and they are enclosed in curly braces {}
- What is the difference between named and default exports?
  A module can have at most one default export but many named exports
  a default export allows the content of what is being exported to be named in the file which is importing it.
  default exports allow you to give any name you would like to the module which is being imported.

Named exports maintain the name of the entity being exported from one module and imported into another.
Unlike default exports, a module can have multiple named exports since they all have their own unique names.
named exports make sure that the name of the component being exported is maintained no matter where it is imported.

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
