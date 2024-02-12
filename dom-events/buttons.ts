const $btn = document.querySelector('.click-button');

if (!$btn) throw new Error('The $btn query failed');

function handleClick(event: Event): void {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

$btn.addEventListener('click', handleClick);

const $btnHover = document.querySelector('.hover-button');

if (!$btnHover) throw new Error('The $btnHover query failed');

function handleMouseover(event: Event): void {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

$btnHover.addEventListener('mouseover', handleMouseover);

const $btnDblClick = document.querySelector('.double-click-button');

if (!$btnDblClick) throw new Error('The $btnDblClick query failed');

function handleDoubleClick(event: Event): void {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

$btnDblClick.addEventListener('dblclick', handleDoubleClick);
