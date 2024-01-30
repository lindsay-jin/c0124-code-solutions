const width: number = 2;
const height: number = 3;
const area: number = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill: number = 20;
const payment: number = 100;
const change: number = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 10;
const midterm: number = 40;
const final: number = 70;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'John';
const lastName: string = 'Doe';
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 6;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 10;
const isSparta: boolean = headCount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
