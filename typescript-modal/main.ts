// query the DOM for the button on the webpage, the 'open-modal' button, assign it to a variable
const $openModal = document.querySelector('.open-modal');

// query the DOM for the button that shows up when you click the 'open-modal' button
// which is the 'dismiss-modal' button, assign it to a variable
const $dismissModal = document.querySelector('.dismiss-modal');

// query the DOM for the dialog that pops up when you click on the 'open-modal' button,
// assign it to a variable
const $dialog = document.querySelector('dialog');

// throw an error when any of the variable is null
if (!$openModal || !$dismissModal || !$dialog)
  throw new Error('The query failed.');

// creating a callback function that displays the dialog box
function openModal(): void {
  $dialog?.showModal();
}
// adding an event listener to the 'open-modal' button, which runs the openModal function when clicked
$openModal.addEventListener('click', openModal);

// creating a callback function that closes the dialog box
function dismissModal(): void {
  $dialog?.close();
}

// adding an event listener to the 'dismiss-modal' button, which causes the dismissModal function to run when clicked
$dismissModal.addEventListener('click', dismissModal);
