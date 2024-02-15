function handleFocus(event: Event): void {
  console.log('focus event was fired.');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleBlur(event: Event): void {
  console.log('blur event was fired.');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
}

function handleInput(event: Event): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log('eventTarget.name:', eventTarget.name);
  console.log('eventTarget.value:', eventTarget.value);
}

const $inputName = document.getElementById('user-name');
const $inputEmail = document.getElementById('user-email');
const $textarea = document.querySelector('textarea');

if (!$inputName) throw new Error('The $inputName query failed.');
if (!$inputEmail) throw new Error('The $inputEmail query failed.');
if (!$textarea) throw new Error('The $textarea query failed.');

$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);

$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);

$textarea.addEventListener('focus', handleFocus);
$textarea.addEventListener('blur', handleBlur);
$textarea.addEventListener('input', handleInput);
