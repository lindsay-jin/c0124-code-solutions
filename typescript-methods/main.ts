const heroes: string[] = ['Batman', 'Superman', 'Spiderman', 'Iron man'];

let randomNumber: number = Math.random();
// console.log(randomNumber);

randomNumber *= heroes.length; // type??
const randomIndex: number = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

const randomHero: string = heroes[randomIndex];
console.log('randomHero:', randomHero);

// Array Methods:
const library = [
  // type?
  { title: 'Nineteen Eighty-Four', author: 'George Orwell' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Brave New World', author: 'Aldous Huxley' },
];

const lastBook = library.pop(); // type?
console.log('lastBook:', lastBook);
// console.log(library); why css and js only?

const firstBook = library.shift(); // type?
console.log('firstBook:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);
// console.log(library.push(js)); //3
console.log(library);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

// String Methods:
const fullName: string = 'John Doe';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

const firstName: string = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);

// Object Methods:
const employee = {
  name: 'John Doe',
  age: 50,
  position: 'Software Engineer',
};

const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);

const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);

const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
