const Pokemon = require("../models/pokemon");
const Game = require("../models/game");

module.exports = {
  fetchPokemonData,
  fetchPokemonList,
  index,
  searchPokemon,
  // displayAllPokemon,
  savePokemon,
  deleteOnePokemon,
};

async function index(req, res) {
  console.log("hello world");
  res.render("pokemons", { pokemons: await Pokemon.find({}) });
}

async function fetchPokemonData(pokemonNumber) {
  console.log(pokemonNumber, "Pokemon Number");
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

async function searchPokemon(req, res) {
  const pokemon = await fetchPokemonData(req.query.search_term);
  res.render("pokemons/search", {
    title: "Search Pokemons",
    pokemon,
    errorMsg: "",
  });
}

async function savePokemon(req, res) {
  try {
    const data = await fetchPokemonData(req.query.id);
    const pokemonData = {
      name: data.name,
      id: data.id,
      types: data.types.map(function (typeInfo) {
        return typeInfo.type.name;
      }),
      abilities: data.abilities.map(function (abilityInfo) {
        return {
          name: abilityInfo.ability.name,
        };
      }),
      stats: data.stats.map(function (statInfo) {
        return {
          name: statInfo.stat.name,
          base_stat: statInfo.base_stat,
        };
      }),
      height: data.height,
      weight: data.weight,
      sprites: {
        front_default: data.sprites.front_default,
        back_default: data.sprites.back_default,
      },
    };
    const pokemonNew = new Pokemon(pokemonData);
    await pokemonNew.save();
    // return pokemonNew;
    res.redirect("/pokemons");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function deleteOnePokemon(req, res) {
  console.log(req);
  await Pokemon.deleteOne({ _id: req.params.id });
  res.redirect("/pokemons");
}

// async function displayAllPokemon(req, res) {
//   const pokemon = await fetchPokemonList();
//   res.render("pokemons/search", { title: "All Pokemon", pokemon });
// }
