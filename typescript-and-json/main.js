'use strict';
// Create an Array containing three Object literals, representing books.
// Give each book an isbn, a title, and an author (all Strings).
// Log the Array of books and its type to the console (see typeof).
// Remember to label each thing you log to the console.
const arr = [
  { isbn: 23456789123, title: 'Hello, world', author: 'Ethan James' },
  { isbn: 23456789124, title: 'Goodbye, world', author: 'Ellen James' },
  { isbn: 234567891235, title: 'Good morning, world', author: 'Evan James' },
];
for (let i = 0; i < arr.length; i++) {
  console.log('book:', arr[i]);
  console.log('typeof book:', typeof arr[i]);
} //object
const jsonArr = JSON.stringify(arr);
console.log('JSON string of books array:', jsonArr);
console.log('typeof JSON string of books array:', typeof 'jasonArr'); // string
const student = { id: 1234567, name: 'John Doe' };
console.log('student:', student);
console.log('typeof student:', typeof student); //object
const jsonString = '{"id":1234567, "name":"John Doe"}';
const newObj = JSON.parse(jsonString);
console.log('newObj:', newObj);
console.log('typeof newObj:', typeof newObj);
