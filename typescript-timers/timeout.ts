const $h1 = document.querySelector('h1');
if (!$h1) throw new Error('The $h1 query failed.');

setTimeout(() => {
  $h1.textContent = 'Hello There';
}, 2000);
