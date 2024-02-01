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

function isUnderFive(number: number): boolean {
  return number < 5;
}

// 2.
function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 3.
function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

// 4.
function isOldEnoughToDrink(person: { name: string; age: number }): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

// 5.
function isOldEnoughToDrive(person: { name: string; age: number }): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

// 6.
function isOldEnoughToDrinkAndDrive(person: {
  name: string;
  age: number;
}): boolean {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}

// 7.
function categorizeAcidity(pH: number): string {
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
function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return `We're the warner brothers!`;
      break;
    case 'dot':
      return `I'm cute~`;
      break;
    default:
      return 'Goodnight everybody!';
  }
}

// 9.
function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die hard';
      break;
    case 'comedy':
      return 'The Big Lebowski';
      break;
    case 'horror':
      return 'The ring';
      break;
    case 'drama':
      return 'Les Miserables';
      break;
    case 'musical':
      return 'Moulin Rouge';
      break;
    case 'sci-fi':
      return 'Dune';
      break;
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
