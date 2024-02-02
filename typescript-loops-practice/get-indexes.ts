/* exported getIndexes */
function getIndexes(array: unknown[]): number[] {
  const arr = [];
  // go through the loop and see if there's something,
  for (let i = 0; i < array.length; i++) {
    arr.push(i);
  }
  return arr;
  // if there is, then get the index number of that string.
}
