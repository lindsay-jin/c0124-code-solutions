/* exported capitalize */
function capitalize(word: string): string {
  let str = '';
  const cap = word[0].toUpperCase();
  for (let i = 1; i < word.length; i++) {
    str += word[i].toLowerCase();
  }
  return cap + str;
}
