import { ChangeEvent, useState } from 'react';

export function Input() {
  const [inputChange, setInputChange] = useState('');

  let msg = '';
  if (inputChange.length === 0) {
    msg = 'A password is required.';
  } else if (inputChange.length < 8) {
    msg = 'Your password is too short.';
  } else {
    msg = '';
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputChange(event.target.value);
  }

  return (
    <div>
      <p>Password</p>
      <input type="password" onChange={handleChange} />
      <p>{msg}</p>
    </div>
  );
}
