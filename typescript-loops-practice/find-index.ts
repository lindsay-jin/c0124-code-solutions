/* exported findIndex */
function findIndex(array: unknown[], value: unknown): number {
  // loop through array
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
// check if array[i] equals to value
// if it does, return i
// if it doesn't return -1
