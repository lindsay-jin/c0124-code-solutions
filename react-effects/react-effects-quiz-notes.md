# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when the component first renders by calling createRoot on DOM

- What is a React Effect?
  a functionality provided by the useEffect hook in React components that does tasks automatically under certain conditions

- When should you use an Effect and when should you not use an Effect?
  when you “step out” of your React code and synchronize with some external system. This includes browser APIs, third-party widgets, network.

Don't use useEffect if it can be accomplished by useState

- When do Effects run?
  after component first mounts, and then only after dependencies change on subsequent renders

- What function is used to declare an Effect?
  import { useEffect } from 'react'; Then, call it at the top level of your component and put some code inside your Effect:

function MyComponent() {
useEffect(() => {
// Code here will run after _every_ render
});
return <div />;
}

- What are Effect dependencies and how do you declare them?
  Effect dependencies in React are a way to control when your effect (defined with the useEffect hook) should re-run. They are declared as an array of values (the dependency array) that, when changed, will trigger the effect to execute again.
  You declare them by specifying an array of dependencies as the second argument to the useEffect call.

- Why would you want to clean up from an Effect?
  your code doesn’t close the connection when the component unmounts. As the user navigates across the app, the connections would keep piling up.

- How do you clean up from an Effect?
  return a cleanup function from your Effect:

useEffect(() => {
const connection = createConnection();
connection.connect();
return () => {
connection.disconnect();
};
}, []);

React will call your cleanup function each time before the Effect runs again

- When does the cleanup function run?
  React will call your cleanup function each time before the Effect runs again, and one final time when the component unmounts

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
