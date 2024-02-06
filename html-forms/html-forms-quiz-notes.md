# html-forms-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of an HTML `form` element?
  It is used to contain forms, it defines a form and attributes that determine the form's behavior.
- action attribute defines the location(URL) where the form's collected data should be sent when it is submitted.
- The method attribute defines which HTTP method to send the data with.

- Give five examples of form control elements.
  <label>, <input>, <textarea>,<form>,<button>

- Give three examples of `type` attribute values for HTML `<input>` elements.
  text, email, checkbox, radio, password, search

- Is an HTML `<input>` element a block element or an inline element?
  inline

## Notes

- The <button> element accepts a type attribute — this accepts one of three values: submit, reset, or button.

- Each time you have a set of radio buttons, you should nest them inside a <fieldset> element.

- The text content of the <legend> formally describes the purpose of the <fieldset> it is included inside.

- the <label> associates with the <input> via its for attribute (which contains the <input> element's id attribute
  example: <label for="name">Name:</label>
  <input type="text" id="name" name="user_name" />

- Several radio buttons can be tied together. If they share the same value for their name attribute, they will be considered to be in the same group of buttons

- You can make a button by using the <input> element and with the <button> element.
