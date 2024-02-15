'use strict';
//query the DOM for contact form
const $form = document.querySelector('form');
//Listen for the 'submit' event on the form element object.
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements;
  const obj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(obj);
  $form.reset();
});
