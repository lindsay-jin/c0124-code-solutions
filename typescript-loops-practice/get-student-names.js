'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  let arr = [];
  for (let i = 0; i < students.length; i++) {
    arr.push(students[i].name);
  }
  return arr;
}
//loop through students, an array of objects
//get the values of name properties in each object
//add all values to arr
