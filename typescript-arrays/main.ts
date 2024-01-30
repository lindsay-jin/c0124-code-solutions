const colors: string[] = ['red', 'white', 'blue'];
console.log('value of colors[0]:', colors[0]);
console.log('value of colors[1]:', colors[1]);
console.log('value of colors[2]:', colors[2]);

console.log('America is' + ' ' + colors);

colors[2] = 'green';
console.log('Mexico is' + ' ' + colors); // spaces?

// The student array
const students: string[] = ['John', 'Mark', 'Lindsay', 'Lily'];
const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} in the class.`);
const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
// console.log(lastIndex)
console.log(`The last student in the array is ${lastStudent}.`);
console.log('value of students:', students);
