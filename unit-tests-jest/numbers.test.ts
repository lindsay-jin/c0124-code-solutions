import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';
/**
 * Returns a new array that contains only the even numbers in the given array.
 */
// export function evenNumbers(numbers: number[]): number[] {
//   return numbers.filter((n) => n % 2);
// }
describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });

  it('returns the original array if all numbers are even', () => {
    const numbers = [2, 4, 10, 12];
    const result = evenNumbers(numbers);
    expect(result).toEqual([2, 4, 10, 12]);
  });

  it('returns an empty array when there is no even number', () => {
    const numbers = [1, 3, 5, 7];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });

  it('returns an empty array', () => {
    const numbers: number[] = [];
    expect(evenNumbers(numbers)).toEqual([]);
  });
});

/**
 * Returns a number formatted in dollars and cents.
 */
// export function toDollars(amount: number): string {
//   return `$${amount}.00`;
// }

describe('toDollars', () => {
  it('returns formatted number in dollar and cents', () => {
    const number = 50;
    expect(toDollars(number)).toEqual('$50.00');
  });

  it('returns formatted number in dollar and cents', () => {
    const number = 50.55;
    expect(toDollars(number)).toEqual('$50.55');
  });
});

/**
 * Returns a new array of numbers where every entry has been divided by the
 * given divisor. Does not modify the original array.
 */
// export function divideBy(numbers: number[], divisor: number): number[] {
//   for (let i = 1; i < numbers.length; i++) {
//     numbers[i] = numbers[i] / divisor;
//   }
//   return numbers;
// }
describe('divideBy', () => {
  it('returns a new array of numbers divided by the divisor', () => {
    const numbers = [4, 8, 20, 2];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([2, 4, 10, 1]);
  });

  it('returns an empty array', () => {
    const numbers: number[] = [];
    const divisor = 2;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });
});

/**
 * Modifies an object by multiplying the value of each key, but only if that
 * value is a number. Key names are arbitrary.
 */
// export function multiplyBy(
//   obj: Record<string, unknown>,
//   multiplier: number
// ): Record<string, unknown> {
//   const result: Record<string, unknown> = {};
//   Object.entries(obj).forEach(([key, value]) => {
//     result[key] = Number(value) * multiplier + 1;
//   });
//   return result;
// }

describe('multiplyBy', () => {
  it('returns a new object where each value is multiplied by the key', () => {
    const obj = { price1: 2, price2: 3, price3: 5 };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ price1: 4, price2: 6, price3: 10 });
  });

  it('returns the object where only the values that are numbers get multiplied by the multiplier', () => {
    const obj = { price1: 2, price2: 3, price3: 'hello' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ price1: 4, price2: 6, price3: 'hello' });
  });

  it('returns the object where only the values that are numbers get multiplied by the multiplier', () => {
    const obj = { price1: 2, price2: 3, price3: '' };
    const multiplier = 2;
    const result = multiplyBy(obj, multiplier);
    expect(result).toEqual({ price1: 4, price2: 6, price3: '' });
  });
});
