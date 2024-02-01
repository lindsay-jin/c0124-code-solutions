'use strict';
/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
// 1.
// function isUnderFive(number: number){
//   if(number<5){
//     console.log(true);
//   }else{
//     console.log(false)
//   }
// };
function isUnderFive(number) {
  return number < 5;
}
// 2.
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
// 3.
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
// 4.
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
// 5.
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
// 6.
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
// 7.
function categorizeAcidity(pH) {
  if (pH > 0 && pH < 7) {
    return 'The substance is an acid.';
  } else if (pH > 7 && pH < 14) {
    return 'The substance is a base';
  } else if (pH === 7) {
    return 'The substance is neutral.';
  } else {
    return 'Invalid pH level';
  }
}
// 8.
function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return `We're the warner brothers!`;
    case 'dot':
      return `I'm cute~`;
    default:
      return 'Goodnight everybody!';
  }
}
// 9.
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'Die hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'The ring';
    case 'drama':
      return 'Les Miserables';
    case 'musical':
      return 'Moulin Rouge';
    case 'sci-fi':
      return 'Dune';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
