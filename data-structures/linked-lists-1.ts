/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

// return the value of the data property of the first node in the list
export function getHead<T>(list: LinkedList<T>): T | null {
  return null;
}

// update the value of the data stored in the head of the list with the supplied value
export function updateHead<T>(list: LinkedList<T>, value: T | null): void {}

// return the entire list except for the current head node
export function withoutHead<T>(list: LinkedList<T>): LinkedList<T> | null {
  return null;
}

// create a new node with the supplied value and set that node as the head of the supplied list.
// The entire list should then be returned. Note that since a node is a linked list,
// you can create the node with new LinkedList(value)
export function prepend<T>(list: LinkedList<T>, value: T): LinkedList<T> {
  return list;
}
