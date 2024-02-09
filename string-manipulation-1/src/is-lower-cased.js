'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  let letters = word.replace(/[^a-zA-Z]/g, '');
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
