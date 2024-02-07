/* exported omit */

function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const obj: Record<string, unknown> = {};

  for (const prop in source) {
    if (!keys.includes(prop)) {
      obj[prop] = source[prop];
    }
  }
  return obj;
}
