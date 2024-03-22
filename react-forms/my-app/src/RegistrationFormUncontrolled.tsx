import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // form triggered the event
    const formData = new FormData(form); //use FormData to get the form content
    const values = Object.fromEntries(formData); // getting the values of form content
    console.log('values', values);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        Username:
        <input type="text" name="username" defaultValue="" />
      </label>
      <label htmlFor="">
        Password:
        <input type="text" name="password" defaultValue="" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}

// When the form is submitted, log the form values to the console, as { username, password }.
// To do this, you will need to extract currentTarget from the form, use FormData to get the form content,
// and Object.fromEntries(formData) to get the individual field values.
