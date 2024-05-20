const pokemon = require("../models/pokemon");
const Game = require("../models/game");

module.exports = {
  fetchPokemonData,
  fetchPokemonList,
  index,
  new: newPokemon,
};

async function index(req, res) {
  console.log("hello world");
  res.render("pokemons", { pokemons: await pokemon.find({}) });
}

async function fetchPokemonData(pokemonNumber) {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function fetchPokemonList() {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function newPokemon(req, res) {
  const pokemonList = await fetchPokemonList();
  const pokemon = await fetchPokemonData(req.query.search_term);
  res.render("pokemons/new", {
    title: "Add Pokemons",
    pokemonList,
    pokemon,
    errorMsg: "",
  });
}
