import React from 'react';
import ReactDOM from 'react-dom';

function PokeList(props) {
  const pokeListItem = pokedex.map(item =>
    <li key={item.number}>
      {item.name}
    </li>
  );
  return (
    <ul>{pokeListItem}</ul>
  );
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(<PokeList pokedex={pokedex} />, document.querySelector('#root'));
