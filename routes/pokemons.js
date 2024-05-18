const express = require("express");
const router = express.Router();
const pokemonCtrl = require("../controllers/pokemons");

module.exports = router;

router.get("/pokemons", pokemonCtrl.fetchPokemon);
router.post("/games/:id/pokemons", performersCtrl.addToGame);
