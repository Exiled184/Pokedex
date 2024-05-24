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

// fetchPokemonData("9");
// fetchPokemonData("91");
// fetchPokemonData("Charmander");

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

fetchPokemonList();

// <!-- <section id="badge-container">
//   <% pokemon.forEach(function(p) { %>
//   <article class="badge"><%= p.name %></article>
//   <% }) %>
// </section>

// <form id="add-pokemon-form" action="/pokemon" method="POST">
//   <label>Name:</label>
//   <input type="text" name="name" />
//   <input type="submit" value="Add Pokemon" />
// </form> -->

// const pokemonTypes = [
//   "fire": <img src="red"></img>,
//   "water": blue,
//   "grass": green,
// ]

// pokemonTypes("fire")

// generatePokemonBadges(pokmeonName, image){
//   return {[pokemon]}

// how to create dhynamic objects with key and values properties

// const PokemonHeroes = {
//
//   “fire-pokemon”: “Image Red Background”,
//   “water-pokemon”: “Image of Blue Backgroun”,
//
//   }
//
//   how to create dynamic object with key and value properties it
//
//
//   <img src=”<%- PokemonHeroes[“fire-pokemon”] %>”/>
//
//   const result = PokemonHeroes[“fire-pokemon”]
//
//   console.log(result)
//
//   // “image red bg”
