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
