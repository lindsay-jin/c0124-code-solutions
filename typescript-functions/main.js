'use strict';
//1 convertMinuteToSeconds(minutes)
function convertMinuteToSeconds(minutes) {
  return minutes * 60;
}
convertMinuteToSeconds(5);
console.log(convertMinuteToSeconds(5));
console.log(convertMinuteToSeconds(10));
//2 greet(name)
function greet(name) {
  return 'Hey ' + name;
}
greet('Beavis');
console.log(greet('Beavis'));
//3 getArea(width, height)
let getArea = (width, height) => width * height;
console.log(getArea(17, 42));
//4. getFirstName(person)
let getFirstName = (person) => person.firstName;
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
//5. getLastElement(array)
let getLastElement = (array) => array[array.length - 1];
console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
//6. callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
console.log(callOtherFunction(convertMinuteToSeconds, 10));
