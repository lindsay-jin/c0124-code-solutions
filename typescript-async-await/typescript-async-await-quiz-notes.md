# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  An async function declaration creates an AsyncFunction object.
  The await operator is used to wait for a Promise and get its fulfillment value.

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  With async and await, you can write asynchronous code that resembles synchronous code. async and await use try catch block for error handling

- When do you use `async`?
  when you want a function to be an asynchronous function

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when you want the function to execute only after its promise is resolved because await pauses the execution of its surrounding async function until the promise is settled.

- How do you handle errors with `await`?
  using try, catch block

- What do `try`, `catch` and `throw` do? When do you use them?
  try block is used to enclose the code that might throw an exception. It's the block of code where you anticipate potential errors.
  catch block is used to handle exceptions that are thrown within the corresponding try block. It contains code that handles the exceptional condition.

throw throws an exception. It's used within the try block when an error condition is detected.

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  the function will continue executing synchronously, and the Promise will not be awaited. This means that the function will not wait for the Promise to resolve or reject before moving on to the next line of code.

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await provides a cleaner code
