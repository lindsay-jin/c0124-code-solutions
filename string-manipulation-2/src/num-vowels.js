'use strict';
/* exported numVowels */
function numVowels(string) {
  //loop through the string
  //check if string[i] = vowel
  //if it is, += 0
  let num = 0;
  for (let i = 0; i < string.length; i++) {
    string = string.toLowerCase();
    switch (string[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        num += 1;
    }
  }
  return num;
}
