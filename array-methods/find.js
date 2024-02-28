'use strict';
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];
const products = [
  { id: 1, name: 'iPhone', price: 999 },
  { id: 2, name: 'Samsung Galaxy', price: 899 },
  { id: 3, name: 'Google Pixel', price: 799 },
];
//find the first object inside of the users array that has an id of 2, and assign it to a variable user
function is2(person) {
  return person.id === 2;
}
const user = users.find(is2);
console.log('user', user);
//find the first object inside of the products array that has a price greater than 900,
//and assign it to a variable expensiveProduct
function moreThan900(person) {
  return person.price >= 900;
}
const expensiveProduct = products.find(moreThan900);
console.log('expensiveProduct', expensiveProduct);
