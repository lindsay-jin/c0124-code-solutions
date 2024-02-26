'use strict';
const $countdown = document.querySelector('.countdown-display');
if (!$countdown) throw new Error('The $h1 query has failed.');
setInterval(timer, 1000);
let count = 4;
function timer() {
  if (!$countdown) throw new Error('The $h1 query has failed.');
  if ($countdown.textContent === '4') {
    $countdown.textContent = (count--).toString();
  } else if ($countdown.textContent === '3') {
    $countdown.textContent = (count--).toString();
  } else if ($countdown.textContent === '2') {
    $countdown.textContent = (count--).toString();
  } else if ($countdown.textContent === '1')
    $countdown.textContent = '~Earth Beeeelooowww Us~';
}
