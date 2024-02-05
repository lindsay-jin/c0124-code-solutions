/* exported firstChars */

function firstChars(length: number, string: string): string {
  // input string, output string[0] to string[length-1]
  if (string.length < length) {
    return string;
  }

  let str = '';
  for (let i = 0; i < length; i++) {
    str += string[i];
  }
  return str;
}
