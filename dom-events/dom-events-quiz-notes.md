# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  Debugging, checking for errors and making sure everything is running properly.

- What is the purpose of events and event handling?
  Events carry out different interactive functionalities you can incorporate in a web page and Event handlers runs a block of code when the event fires.

- Are all possible parameters required to use a JavaScript method or function?
  no, some come with default values.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  A function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

- What object is passed into an event listener callback when the event fires?
  Event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  the specific HTML element that triggered the event. You can use console.log() to check.

- What is the difference between these two snippets of code?

  element.addEventListener('click', handleClick);
  callback function is not being called, the function handleClick definition is being passed as an argument. This is a reference to the function

  element.addEventListener('click', handleClick());
  callback function is being called

## Notes
