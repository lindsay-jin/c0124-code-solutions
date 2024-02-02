'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  //loop through the numbers, which is an array
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      arr.push('even');
    } else {
      arr.push('odd');
    }
  }
  return arr;
}
//check if numbers[i] % 2 === 0
//if it is, push 'even' to arr
//if not, push 'odd' to arr
// return arr after the loop
