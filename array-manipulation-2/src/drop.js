'use strict';
/* exported drop */
function drop(array, count) {
  let arr = [];
  for (let i = count; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
