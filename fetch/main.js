'use strict';
// use fetch to send a GET request to https://jsonplaceholder.typicode.com/users,
// and log the Array of user objects to the console.
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      //method: 'get',
    });
    const user = await response.json();
    if (!response.ok) {
      throw new Error(`Network response failed with ${response.status}.`);
    }
    console.log(user);
  } catch (error) {
    console.log('error', error);
  }
}
getUser();
async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    const pokemon = await response.json();
    if (!response.ok) {
      throw new Error(`Network response failed with ${response.status}.`);
    }
    console.log(pokemon);
  } catch (error) {
    console.log('error', error);
  }
}
getPokemon();
