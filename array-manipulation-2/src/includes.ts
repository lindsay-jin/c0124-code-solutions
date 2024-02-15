/* exported includes */

function includes(array: any, value: any): boolean {
  // loop through the array
  // check if value = array[i]
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
