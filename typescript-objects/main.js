'use strict';
// let student ={
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
// }
const student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'designer';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
const vehicle = {
  make: 'Toyota',
  model: 'Lexus',
  year: 2010,
};
vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);
const pet = {
  name: 'Blue',
  kind: 'Cavapoo',
};
delete pet.name;
delete pet.kind;
console.log('value of pet', pet);
