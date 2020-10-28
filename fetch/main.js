/* eslint-disable no-console */

const request = fetch('https://jsonplaceholder.typicode.com/users');

request.then(res => res.json()
  .then(data => console.log(data))
  .catch(error => console.error(error)));

const pokeData = fetch('https://pokeapi.co/api/v2/pokemon/1');

pokeData.then(res => res.json()
  .then(data => console.log(data))
  .catch(error => console.error(error))
);
