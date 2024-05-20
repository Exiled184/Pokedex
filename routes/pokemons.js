const express = require("express");
const router = express.Router();
const pokemonCtrl = require("../controllers/pokemons");

module.exports = router;

router.get("/", pokemonCtrl.index);
router.get("/search", pokemonCtrl.searchPokemon);
// router.get("/search", pokemonCtrl.displayAllPokemon);
// router.post("/new", pokemonCtrl.newPokemon);
// router.post("/new", async function (req, res) {
//   try {
//     const pokemon = await req.body.pokemon;
//     const pokemonData = await pokemonCtrl.fetchPokemonData(pokemon);
//     console.log(pokemonData);
//     res.render("pokemon", { title: "Pokedex", pokemon: pokemonData });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// });
