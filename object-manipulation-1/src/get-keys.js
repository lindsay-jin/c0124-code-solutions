'use strict';
/* exported getKeys */
function getKeys(object) {
  const arr = [];
  for (const prop in object) {
    arr.push(prop);
  }
  return arr;
}
