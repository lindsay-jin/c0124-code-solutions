'use strict';
/* exported capitalize */
function capitalize(word) {
  let str = '';
  let cap = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    str += word[i].toLowerCase();
  }
  return cap + str;
}
