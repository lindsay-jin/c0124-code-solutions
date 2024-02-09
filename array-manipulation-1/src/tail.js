'use strict';
/* exported tail */
function tail(array) {
  let arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
