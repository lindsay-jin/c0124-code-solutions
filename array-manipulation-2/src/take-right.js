'use strict';
/* exported takeRight */
function takeRight(array, count) {
  //if count<=array.length then return arr
  //if count>array.length then return array
  if (count <= array.length) {
    return array.slice(array.length - count);
  } else {
    return array;
  }
}
