interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

// query the DOM for contact form
const $form = document.querySelector('form') as HTMLFormElement;
// Listen for the 'submit' event on the form element object.
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $formElements = $form.elements as FormElements;
  const obj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(obj);
  $form.reset();
});
