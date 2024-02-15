'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  //loop through and return word with first letter capitalized + rest lowercased
  // when word is JavaScript, return JavaScript
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  let str = '';
  word = word.toLowerCase(); // word is all lower cased
  for (let i = 1; i < word.length; i++) {
    str += word[i];
  }
  return word[0].toUpperCase() + str;
}
