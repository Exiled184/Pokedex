const express = require("express");
const router = express.Router();
const pokemonCtrl = require("../controllers/pokemons");
const pokemon = require("../models/pokemon");
const ensureLoggedIn = require("../config/ensureLoggedIn");

module.exports = router;

router.get("/", pokemonCtrl.index);
router.get("/search", ensureLoggedIn, pokemonCtrl.searchPokemon);
router.post("/save", ensureLoggedIn, pokemonCtrl.savePokemon);
router.post(
  "/games/:id/pokemons",
  ensureLoggedIn,
  pokemonCtrl.addPokemonToGame
);
router.delete("/:id", ensureLoggedIn, pokemonCtrl.deleteOnePokemon);
