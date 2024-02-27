const $img = document.querySelector('img');
const $leftAngle = document.querySelector('.fa-angle-left');
const $rightAngle = document.querySelector('.fa-angle-right');
const $dots = document.querySelectorAll('.dots');

let intervalId = setInterval(timer, 3000);
const images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let index = 0;

// automatic changing of images
function timer(): void {
  if (index >= 0 && index < 4) {
    index++;
  } else if (index === 4) {
    index = 0;
  }

  for (let x = 0; x < $dots.length; x++) {
    if (x === index) {
      $dots[x].setAttribute('class', 'fa-solid fa-circle dots');
    } else {
      $dots[x].setAttribute('class', 'fa-regular fa-circle dots');
    }
  }

  $img?.setAttribute('src', images[index]);
}
// why is the first dot not solid??
// next one:
$rightAngle?.addEventListener('click', next);

function next(): void {
  clearInterval(intervalId);
  if (index >= 0 && index < 4) {
    index++;
    $img?.setAttribute('src', images[index]);
  } else if (index === 4) {
    $img?.setAttribute('src', images[0]);
    index = 0;
  }

  for (let x = 0; x < $dots.length; x++) {
    if (x === index) {
      $dots[x].setAttribute('class', 'fa-solid fa-circle dots');
    } else {
      $dots[x].setAttribute('class', 'fa-regular fa-circle dots');
    }
  }

  intervalId = setInterval(timer, 3000);
}

// previous one:
$leftAngle?.addEventListener('click', previous);

function previous(): void {
  clearInterval(intervalId);
  if (index <= 4 && index > 0) {
    $img?.setAttribute('src', images[index - 1]);
    index--;
  } else if (index === 0) {
    $img?.setAttribute('src', images[4]);
    index = 4;
  }

  for (let x = 0; x < $dots.length; x++) {
    if (x === index) {
      $dots[x].setAttribute('class', 'fa-solid fa-circle dots');
    } else {
      $dots[x].setAttribute('class', 'fa-regular fa-circle dots');
    }
  }

  intervalId = setInterval(timer, 3000);
}

// dots:
for (let i = 0; i < $dots.length; i++) {
  $dots[i].addEventListener('click', () => {
    clearInterval(intervalId);
    for (let x = 0; x < $dots.length; x++) {
      $dots[x].setAttribute('class', 'fa-regular fa-circle');
    }
    $dots[i].setAttribute('class', 'fa-solid fa-circle');
    $img?.setAttribute('src', images[i]);
    intervalId = setInterval(timer, 3000);
  });
}
