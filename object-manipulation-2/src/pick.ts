/* exported pick */

// loop through the array(keys)
// and check if it matches the properties in source
// if it is, then it gets pushed into new obj

function pick(source: any, keys: string[]): Record<string, unknown> {
  const obj: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      obj[keys[i]] = source[keys[i]];
    }
  }
  return obj;
}
