'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  let arr = [];
  //loop through each string in the array
  for (let i = 0; i < words.length; i++) {
    arr.push(words[i] + suffix);
  }
  return arr;
  //get that word and add suffix to it
  //add that word back into the array
  //return
}
