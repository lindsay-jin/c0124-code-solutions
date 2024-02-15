'use strict';
// Query the DOM for all <span> elements. As the user triggers 'keydown' events on the document,
// keep track of what character of the phrase they are on by its index.
// The user should know what key to type next.
// The user should know when they got a key right.
// The user should know when they got a key wrong and need to retry.
let currentIndex = 0;
const $characters = document.querySelectorAll('span'); //event.target
let $currentCharacter = $characters[currentIndex];
if (!$characters) throw new Error('The $characters query failed.');
if (!$currentCharacter) throw new Error('The $currentCharacter query failed.');
//if what I type ===  or not: if yes, letter 'g' turns green,
//underline disappears from 'g', goes on letter 'r'
//if not, then letter 'g' turns red, underline stays on that letter 'g'
for (let i = 0; i < $characters.length; i++) {
  console.log($characters[i].textContent);
}
console.log($currentCharacter.textContent);
// function check(){
//   if(event.key === $currentCharacter.textContent){
//     $currentCharacter.className = 'green'
//   }
// };
// document.addEventListener('keydown', check)
