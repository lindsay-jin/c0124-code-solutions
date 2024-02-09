'use strict';
/* exported omit */
function omit(source, keys) {
  let obj = {};
  for (const prop in source) {
    if (!keys.includes(prop)) {
      obj[prop] = source[prop];
    }
  }
  return obj;
}
