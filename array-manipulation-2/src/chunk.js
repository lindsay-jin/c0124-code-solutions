'use strict';
/* exported chunk */
// chunk(['foo', 'bar', 'baz', 'qux', 'bol'], 2);
// // -> [["foo", "bar"], ["baz", "qux"]]
// chunk([1, 2, 3, 4, 5], 1);
// // -> [[1], [2], [3], [4], [5]]
// chunk([false, true, false, true], 3);
// // -> [[false, true, false], [true]]
// chunk([], 7);
// // -> []
function chunk(array, size) {
  let chunks = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      chunks.push([array[i]]);
    } else {
      let newArr = chunks[chunks.length - 1];
      newArr.push(array[i]);
    }
  }
  return chunks;
}
// function chunk(array: any, size: number): any {
//   let chunks = [];
//   for (let i = 0; i < array.length; i++) {
//     if (i % size === 0) {
//       chunks.push([array[i]]); // [['foo']]
//     } else {
//       let element = chunks[chunks.length - 1]; // ['foo']
//       //console.log(element);
//       element.push(array[i]); // ['foo', 'bar']
//       //console.log(chunks)
//     }
//   }
//   return chunks;
// }
