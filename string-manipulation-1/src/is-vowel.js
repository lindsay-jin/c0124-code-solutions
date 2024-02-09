'use strict';
/* exported isVowel */
// function isVowel(char: string): boolean{
//   if (
//     char.toLowerCase() === 'a' ||
//     char.toLowerCase() === 'e' ||
//     char.toLowerCase() === 'i' ||
//     char.toLowerCase() === 'o' ||
//     char.toLowerCase() === 'u'
//   ) {
//     return true;
//   } return false;
// };
function isVowel(char) {
  switch (char.toLowerCase()) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
  }
  return false;
}
