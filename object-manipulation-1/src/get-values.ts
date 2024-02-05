/* exported getValues */
function getValues(object: any): unknown[] {
  const arr: any = [];
  for (const prop in object) {
    arr.push(object[prop]);
  }
  return arr;
}
