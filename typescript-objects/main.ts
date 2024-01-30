interface studentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

// let student ={
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 50,
// }

const student: studentProps = {
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'designer';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);

const vehicle: Vehicle = {
  make: 'Toyota',
  model: 'Lexus',
  year: 2010,
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;
console.log('value of vehicle[color]:', vehicle['color']);
console.log('vehicle[isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

const pet: Pet = {
  name: 'Blue',
  kind: 'Cavapoo',
};

delete pet.name;
delete pet.kind;

console.log('value of pet', pet);
