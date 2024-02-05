/* exported swapChars */

function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  if (secondIndex > string.length) {
    return string;
  }

  const arr = string.split(''); // example: lodash, 0, 1
  const replacement = arr[firstIndex]; // replacement = l
  arr[firstIndex] = arr[secondIndex]; // arr[firstIndex] = o
  arr[secondIndex] = replacement; // arr[secondIndex] = l

  return arr.join('');
}
