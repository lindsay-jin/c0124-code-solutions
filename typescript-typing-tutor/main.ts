// KeyBoardEvent, property key is the pressed key

let currentIndex = 0;
const $characters = document.querySelectorAll('span');
let $currentCharacter = $characters[currentIndex];

if (!$characters) throw new Error('The $characters query failed.');
if (!$currentCharacter) throw new Error('The $currentCharacter query failed.');

document.addEventListener('keydown', (event) => {
  const typedKey = event.key;
  // let correctCount = 0;

  if (typedKey === $currentCharacter.textContent) {
    $currentCharacter.classList.add('green');
    // correctCount++
    currentIndex++;
    $currentCharacter.classList.remove('underline');
    $currentCharacter = $characters[currentIndex];
    $currentCharacter.className = 'underline';
  } else {
    $currentCharacter.classList.add('red');
  } // return correctCount;
});

// show typing accuracy
// const $openModal = document.querySelector('.open-modal'); // open dialog button
// const $dismissModal = document.querySelector('.dismiss-modal');
// const $dialog = document.querySelector('dialog');

// if (!$openModal) throw new Error('The $openModal query has failed.');
// if (!$dismissModal) throw new Error('The $dismissModal query has failed.');
// if (!$dialog) throw new Error('The $dialog query has failed.');

// function open(): void {
//   $dialog?.showModal();
// }

// $openModal.addEventListener('click', open);

// function close(): void {
//   $dialog?.close();
// }

// $dismissModal.addEventListener('click', close);

// When the user finishes typing the phrase, they can be asked if they'd like to play again.
