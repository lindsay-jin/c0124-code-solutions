'use strict';
const $countdown = document.querySelector('.countdown-display');
const intervalId = setInterval(timer, 1000);
let count = 4;
function timer() {
  count--;
  if (!$countdown) throw new Error('The $countdown query failed.');
  if (count > 0) {
    $countdown.textContent = count.toString();
  } else {
    clearInterval(intervalId);
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  }
}
