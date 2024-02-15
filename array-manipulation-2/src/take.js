'use strict';
/* exported take */
function take(array, count) {
  const arr = [];
  for (let i = 0; i < count && i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
