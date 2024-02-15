/* exported dropRight */

function dropRight(array: any, count: number): any {
  // if count < array.length
  // array.length - count = x, return array[0] to array[x-1]
  const arr = [];
  for (let i = 0; i < array.length - count; i++) {
    if (count < array.length) {
      arr.push(array[i]);
    }
  }
  return arr;
}
