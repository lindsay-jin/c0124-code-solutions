const $countdown = document.querySelector('.countdown-display');

const intervalId = setInterval(timer, 1000);
setInterval(timer, 1000);

let count = 4;
function timer(): void {
  if (!$countdown) throw new Error('The $h1 query has failed.');
  if ($countdown.textContent === '4') {
    $countdown.textContent = (count--).toString();
  } else if ($countdown.textContent === '3') {
    $countdown.textContent = (count--).toString();
  } else if ($countdown.textContent === '2') {
    $countdown.textContent = (count--).toString();
  } else if ($countdown.textContent === '1')
    $countdown.textContent = '~Earth Beeeelooowww Us~';
  clearInterval(intervalId);
  console.log('hello');
}
