/* exported includesSeven */
function includesSeven(array: unknown[]): boolean {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true; // only returns true if it finds 7.
    }
  }
  return false; // returns false if the loop completes without finding 7.
}
