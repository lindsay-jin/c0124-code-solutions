'use strict';
/* exported defaults */
function defaults(target, source) {
  for (let prop in source) {
    if (!(prop in target)) {
      target[prop] = source[prop];
    }
  }
}
//loop source properties
//check if source properties exist in target properties
//it it doesn't, assign the property from source object to target object
//it if does, nothing
