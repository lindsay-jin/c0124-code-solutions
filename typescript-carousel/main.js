'use strict';
const $img = document.querySelector('img');
const $leftAngle = document.querySelector('.fa-angle-left');
const $rightAngle = document.querySelector('.fa-angle-right');
let intervalId = setInterval(timer, 3000);
let images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let index = 0;
//automatic changing of images
function timer() {
  if (index >= 0 && index < 4) {
    index++;
    $img?.setAttribute('src', images[index]);
  } else if (index === 4) {
    index = 0;
    $img?.setAttribute('src', images[index]);
  }
}
//next one:
$rightAngle?.addEventListener('click', next);
function next() {
  clearInterval(intervalId);
  if (index >= 0 && index < 4) {
    index++;
    $img?.setAttribute('src', images[index]);
  } else if (index === 4) {
    $img?.setAttribute('src', images[0]);
    index = 0;
  }
  intervalId = setInterval(timer, 3000);
}
//previous one:
$leftAngle?.addEventListener('click', previous);
function previous() {
  clearInterval(intervalId);
  if (index <= 4 && index > 0) {
    $img?.setAttribute('src', images[index - 1]);
    index--;
  } else if (index === 0) {
    $img?.setAttribute('src', images[4]);
    index = 4;
  }
  intervalId = setInterval(timer, 3000);
}
