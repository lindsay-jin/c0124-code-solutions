/* eslint-disable @typescript-eslint/no-empty-function */
import { SyntaxKind } from 'typescript';
import { Stack } from './lib/stack';

export function getTop<T>(stack: Stack<T>): T | undefined {
  return stack.peek();
}

export function addToTop<T>(stack: Stack<T>, value: T): void {
  return stack.push(value);
}

export function takeTop<T>(stack: Stack<T>): T | undefined {
  return stack.pop();
}

export function isEmpty<T>(stack: Stack<T>): boolean {
  const element = stack.peek();
  if (element === undefined) {
    return true;
  } else {
    return false;
  }

  // return stack.peek() === undefined;
}
