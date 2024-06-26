/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function getFront<T>(queue: Queue<T>): T | undefined {
  return queue.peek();
}

export function addToBack<T>(queue: Queue<T>, value: T): void {
  return queue.enqueue(value);
}

export function takeFront<T>(queue: Queue<T>): T | undefined {
  return queue.dequeue();
}

export function isEmpty<T>(queue: Queue<T>): boolean {
  return queue.peek() === undefined;
}
