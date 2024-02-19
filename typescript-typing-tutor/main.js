'use strict';
//KeyBoardEvent, property key is the pressed key
let currentIndex = 0;
const $characters = document.querySelectorAll('span');
let $currentCharacter = $characters[currentIndex];
if (!$characters) throw new Error('The $characters query failed.');
if (!$currentCharacter) throw new Error('The $currentCharacter query failed.');
document.addEventListener('keydown', (event) => {
  const typedKey = event.key;
  if (typedKey === $currentCharacter.textContent) {
    $currentCharacter.classList.add('green');
    currentIndex++;
    $currentCharacter.classList.remove('underline');
    $currentCharacter = $characters[currentIndex];
    $currentCharacter.className = 'underline';
  } else {
    $currentCharacter.classList.add('red');
  }
});
