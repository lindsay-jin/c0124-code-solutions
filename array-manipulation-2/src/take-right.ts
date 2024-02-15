/* exported takeRight */

function takeRight(array: any, count: number): any {
  // if count<=array.length then return arr
  // if count>array.length then return array
  if (count <= array.length) {
    return array.slice(array.length - count);
  } else {
    return array;
  }
}
