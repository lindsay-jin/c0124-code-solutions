// 1 convertMinuteToSeconds(minutes)
function convertMinuteToSeconds(minutes: number): number {
  return minutes * 60;
}

convertMinuteToSeconds(5);
console.log(convertMinuteToSeconds(5));
console.log(convertMinuteToSeconds(10));

// 2 greet(name)
function greet(name: string): string {
  return 'Hey ' + name;
}

greet('Beavis');
console.log(greet('Beavis'));

// 3 getArea(width, height)

const getArea = (width: number, height: number): number => width * height;

console.log(getArea(17, 42));

// 4. getFirstName(person)

const getFirstName = (person: {
  firstName: string;
  lastName: string;
}): string => person.firstName;

console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

// 5. getLastElement(array)
const getLastElement = (array: string[]): string => array[array.length - 1];

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));

// 6. callOtherFunction(otherFunction, params)
function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}

console.log(callOtherFunction(convertMinuteToSeconds, 10));
