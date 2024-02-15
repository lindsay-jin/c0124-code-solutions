/* exported getKeys */

function getKeys(object: any): string[] {
  const arr: string[] = [];
  for (const prop in object) {
    arr.push(prop);
  }
  return arr;
}
