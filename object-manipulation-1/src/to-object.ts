/* exported toObject */

function toObject(keyValuePair: any): Record<string, unknown> {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}

// function toObject(keyValuePair: any): Record<string, unknown>{
//   const prop = keyValuePair[0];
//   const value = keyValuePair[1];
//   const object = {[prop]: value};
//   return object;
// }
