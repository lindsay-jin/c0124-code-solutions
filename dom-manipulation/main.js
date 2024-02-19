'use strict';
let numOfClicks = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotButton) throw new Error('The $hotButton query failed');
$hotButton.addEventListener('click', addClicks);
// function addClicks(event: Event): void {
//   if (!$hotButton || !$clickCount)
//     throw new Error('The $hotButton or $clickCount query failed');
//   numOfClicks++;
//   $clickCount.textContent = `clicks: ${numOfClicks}`;
//   if(numOfClicks < 4){ // switch(true){case numOfClicks < 4: statement}
//     $hotButton.className = 'hot-button cold';
//   } else if(numOfClicks < 7){
//     $hotButton.className = 'hot-button cool';
//   } else if (numOfClicks < 10){
//     $hotButton.className = 'hot-button tepid';
//   } else if (numOfClicks < 13){
//     $hotButton.className = 'hot-button warm';
//   } else if (numOfClicks <16){
//     $hotButton.className = 'hot-button hot';
//   }else{
//     $hotButton.className = 'hot-button nuclear';
//   }
// };
function addClicks() {
  if (!$hotButton || !$clickCount)
    throw new Error('The $hotButton or $clickCount query failed');
  numOfClicks++;
  let temp;
  if (numOfClicks < 4) {
    // switch(true){case numOfClicks < 4: statement}
    temp = 'cold';
  } else if (numOfClicks < 7) {
    temp = 'cool';
  } else if (numOfClicks < 10) {
    temp = 'tepid';
  } else if (numOfClicks < 13) {
    temp = 'warm';
  } else if (numOfClicks < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }
  $hotButton.className = `hot-button ${temp}`;
  $clickCount.textContent = `clicks: ${numOfClicks}`;
}
