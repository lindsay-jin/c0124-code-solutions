import { takeAChance } from './take-a-chance.js';
takeAChance('Lindsay');

const p = takeAChance('Lindsay');

p.then((value) => {
  console.log(value);
}).catch((error) => {
  console.error(error);
});
