'use strict';
/* exported ransomCase */
function ransomCase(string) {
  let str = '';
  string = string.toLowerCase();
  for (let i = 1; i < string.length; i++) {
    if (i % 2 !== 0) {
      str += string[i].toUpperCase();
    } else {
      str += string[i];
    }
  }
  return string[0].toLowerCase() + str;
}
