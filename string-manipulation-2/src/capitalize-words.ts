/* exported capitalizeWords */

function capitalizeWords(string: string): string {
  // use split(' ') to turn string into an array of strings.
  // then capitalize index 0 of each word in the array
  const arr = string.split(' '); // now: ['apple', 'orange', 'banana']

  const capitalizedArr: string[] = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i]; // arr[0]='apple', arr[1]='orange' ...
    const capitalizedWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
    capitalizedArr.push(capitalizedWord);
  }
  return capitalizedArr.join(' ');
}
