// Query the DOM for all <span> elements. As the user triggers 'keydown' events on the document,
// keep track of what character of the phrase they are on by its index.

// The user should know what key to type next.
// The user should know when they got a key right.
// The user should know when they got a key wrong and need to retry.

const currentIndex = 0;
const $characters = document.querySelectorAll('span'); // event.target
const $currentCharacter = $characters[currentIndex];

if (!$characters) throw new Error('The $characters query failed.');
if (!$currentCharacter) throw new Error('The $currentCharacter query failed.');

// const $eventTarget = event?.target as HTMLElement;

// for (let i = 0; i < $characters.length; i++) { //loops through the entire phrase, output each character
//   console.log($characters[i].textContent);
// }

// console.log($currentCharacter.textContent);

document.addEventListener('keydown', (event) => {
  console.log('event', event);
  console.log(event.key);
}); // so event is KeyBoardEvent, and the property is key
