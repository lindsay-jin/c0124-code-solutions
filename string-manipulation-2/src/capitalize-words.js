'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  //use split(' ') to turn string into an array of strings.
  //then capitalize index 0 of each word in the array
  let arr = string.split(' '); //now: ['apple', 'orange', 'banana']
  let capitalizedArr = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i]; // arr[0]='apple', arr[1]='orange' ...
    let capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    capitalizedArr.push(capitalizedWord);
  }
  return capitalizedArr.join(' ');
}
