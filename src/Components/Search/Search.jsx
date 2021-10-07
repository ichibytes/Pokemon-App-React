import React, { useContext } from "react";
import Card from "../Card";
import { PokemonContext } from "../../Contexts/pokemonContext";

const Search = () => {
  const { pokemon } = useContext(PokemonContext);

  return (
    <div className="home">
              <div className="home__container__top">
          <h1 className="home__title">PokePC</h1>
          <span>Here we save the Pokemons you found.</span>
        </div>
        <div className="home__container__bottom">
          <p>Open the Pokeballs to look at them.</p>
        </div>
      <div className="home__cards">
        {pokemon.map((pokemon) => (
          <Card key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default Search;
