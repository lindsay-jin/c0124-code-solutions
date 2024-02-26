'use strict';
const $h1 = document.querySelector('h1');
if (!$h1) throw new Error('The $h1 query failed.');
$h1.textContent = 'Hello There';
setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2000);
