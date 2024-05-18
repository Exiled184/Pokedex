const Pokemon = require("../models/pokemon");
const Game = require("../models/game");

module.exports = {
  fetchPokemon,
};

async function fetchPokemon(pokemon) {
  try {
    const findPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    const pokemonData = await findPokemon.json();
    console.log(pokemonData);
    return pokemonData;
  } catch (error) {
    console.error("Error:", error);
  }
}
