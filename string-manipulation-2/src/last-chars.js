'use strict';
/* exported lastChars */
function lastChars(length, string) {
  if (string.length < length) {
    return string;
  }
  let str = '';
  for (let i = string.length - length; i < string.length; i++) {
    str += string[i];
  }
  return str;
}
