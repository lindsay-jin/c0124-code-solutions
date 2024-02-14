'use strict';
// when the background is white, and I click on the lightbulb, lightbulb goes dark, screen goes dark
const $lightbulb = document.querySelector('.lightbulb');
const $body = document.querySelector('body');
if (!$lightbulb) throw new Error('The $lightbulb query failed.');
if (!$body) throw new Error('The $body query failed.');
function turnOff() {
  if (!$lightbulb || !$body) throw new Error('The query failed.');
  if ($body.className === 'lightBackground') {
    $lightbulb.className = 'dark';
    $body.className = 'darkBackground';
  } else if ($body.className === 'darkBackground') {
    $lightbulb.className = 'light';
    $body.className = 'lightBackground';
  }
}
$lightbulb.addEventListener('click', turnOff);
// function turnOn(): void{
//   if (!$lightbulb || !$body) throw new Error('The query failed.');
//   if($body.className === 'darkBackground'){
//     $lightbulb.className = 'light';
//     $body.className = 'lightBackground';
//   }
// }
// $lightbulb.addEventListener('click', turnOn);
