'use strict';
// KeyBoardEvent, property key is the pressed key
let currentIndex = 0;
const $characters = document.querySelectorAll('span');
let $currentCharacter = $characters[currentIndex];
if (!$characters) throw new Error('The $characters query failed.');
if (!$currentCharacter) throw new Error('The $currentCharacter query failed.');
let correctCount = 0;
let incorrectCount = 0;
//let accuracy = correctCount/(correctCount + incorrectCount) * 100;
document.addEventListener('keydown', (event) => {
  const typedKey = event.key; // whatever I typed
  if (typedKey === $currentCharacter.textContent) {
    $currentCharacter.classList.add('green');
    correctCount++;
    $currentCharacter.classList.remove('underline');
    currentIndex++;
    $currentCharacter = $characters[currentIndex];
    $currentCharacter.classList.add('underline');
  } else {
    $currentCharacter.classList.add('red');
    incorrectCount++;
  }
  let accuracy = (correctCount / (correctCount + incorrectCount)) * 100;
  console.log(accuracy);
  return accuracy;
});
const $openModal = document.querySelector('.open-modal'); // open dialog button
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
const $yesButton = document.querySelector('.yes-button');
const $noButton = document.querySelector('.no-button');
if (!$openModal) throw new Error('The $openModal query has failed.');
if (!$dismissModal) throw new Error('The $dismissModal query has failed.');
if (!$dialog) throw new Error('The $dialog query has failed.');
if (!$yesButton) throw new Error('The $yesButton query has failed.');
if (!$noButton) throw new Error('The $noButton query has failed.');
function open() {
  $dialog?.showModal();
}
$openModal.addEventListener('click', open);
function close() {
  $dialog?.close();
}
$dismissModal.addEventListener('click', close);
$yesButton.addEventListener('click', () => {
  window.location.reload();
});
$noButton.addEventListener('click', close);
// track how many right you got: make a variable correctCount, every time it turns green, update
