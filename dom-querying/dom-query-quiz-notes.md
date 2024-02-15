# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to check if there is an error or warning, if everything is working properly

- What is a "model"?
  a recreation of something; DOM is a recreation of the document or web page

- Which "document" is being referred to in the phrase Document Object Model?
  the web page or the document we are on

- What is the word "object" referring to in the phrase Document Object Model?
  the documents(elements, attributes) in the document

- What is a DOM Tree?
  the order of a document defined by DOM with root node that represents the entire document that branches out to elements and text nodes.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  elem.querySelector(css), elem.closest(css), getElementByID(),

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll()

- Why might you want to assign the return value of a DOM query to a variable?
  make your code more concise, reuse the variable later. DOM query requires a search through the entire HTML to find the elements, and saving it as a variable saves time

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir()

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  The browser needs to parse all of the elements in the HTML page before the javascript code can access them.

- What does `document.querySelector()` take as its argument and what does it return?
  css selector, the first element

- What does `document.querySelectorAll()` take as its argument and what does it return?
  css, a NodeList that matches all elements

## Notes
