'use strict';
/* exported invert */
//let
//assign each property to value
function invert(source) {
  let invertedObj = {};
  for (let prop in source) {
    invertedObj[source[prop]] = prop;
  }
  return invertedObj;
}
