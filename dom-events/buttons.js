'use strict';
let $btn = document.querySelector('.click-button');
if (!$btn) throw new Error('The $btn query failed');
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}
$btn.addEventListener('click', handleClick);
let $btnHover = document.querySelector('.hover-button');
if (!$btnHover) throw new Error('The $btnHover query failed');
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
$btnHover.addEventListener('mouseover', handleMouseover);
let $btnDblClick = document.querySelector('.double-click-button');
if (!$btnDblClick) throw new Error('The $btnDblClick query failed');
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
$btnDblClick.addEventListener('dblclick', handleDoubleClick);
