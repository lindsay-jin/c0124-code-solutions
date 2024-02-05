'use strict';
/* exported getValues */
function getValues(object) {
  let arr = [];
  for (const prop in object) {
    arr.push(object[prop]);
  }
  return arr;
}
