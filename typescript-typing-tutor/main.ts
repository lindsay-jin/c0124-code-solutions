// KeyBoardEvent, property key is the pressed key

let currentIndex = 0;
const $characters = document.querySelectorAll('span');
console.log($characters.length);
let $currentCharacter = $characters[currentIndex];

if (!$characters) throw new Error('The $characters query failed.');
if (!$currentCharacter) throw new Error('The $currentCharacter query failed.');

let correctCount = 0;
let incorrectCount = 0;
let mistakeMade = false;

document.addEventListener('keydown', (event) => {
  const typedKey = event.key; // whatever I typed

  if (typedKey === $currentCharacter.textContent) {
    $currentCharacter.classList.add('green');
    correctCount++;
    $currentCharacter.classList.remove('underline');
    currentIndex++;
    $currentCharacter = $characters[currentIndex];
    $currentCharacter.classList.add('underline');
    mistakeMade = false; // resets the state for counting a mistake
  } else if (!mistakeMade) {
    //
    $currentCharacter.classList.add('red');
    incorrectCount++;
    mistakeMade = true; // makes sure that subsequent keydown for the same character is not counted as a mistake multiple times
  }
});

function calculateAccuracy(): string {
  const accuracy = (correctCount / (correctCount + incorrectCount)) * 100;
  return accuracy.toFixed();
}

const $openModal = document.querySelector('.open-modal'); // open dialog button
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
const $yesButton = document.querySelector('.yes-button');
const $noButton = document.querySelector('.no-button');
const $score = document.querySelector('.score');

if (!$openModal) throw new Error('The $openModal query has failed.');
if (!$dismissModal) throw new Error('The $dismissModal query has failed.');
if (!$dialog) throw new Error('The $dialog query has failed.');
if (!$yesButton) throw new Error('The $yesButton query has failed.');
if (!$noButton) throw new Error('The $noButton query has failed.');
if (!$score) throw new Error('The $score query has failed.');

function open(): void {
  $dialog?.showModal();
}

$openModal.addEventListener('click', () => {
  open();
  calculateAccuracy();
  $score.textContent = `You scored ${calculateAccuracy()}%!`;
});

function close(): void {
  $dialog?.close();
}

$dismissModal.addEventListener('click', close);

$yesButton.addEventListener('click', () => {
  window.location.reload();
});

$noButton.addEventListener('click', close);
