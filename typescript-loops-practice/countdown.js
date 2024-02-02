'use strict';
/* exported countdown */
function countdown(number) {
  let total = [];
  for (let i = number; i >= 0; i--) {
    total.push(i);
  }
  return total;
}
