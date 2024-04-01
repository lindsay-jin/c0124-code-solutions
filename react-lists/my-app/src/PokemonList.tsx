type Prop = {
  pokedex: Pokemon[];
};

type Pokemon = {
  number: string;
  name: string;
};

export function PokemonList({ pokedex }: Prop) {
  const listOfPokemon = pokedex.map((pokemon) => (
    <div key={pokemon.number}>
      <li>{pokemon.name}</li>
    </div>
  ));
  return <ul>{listOfPokemon}</ul>;
}
