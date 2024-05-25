const express = require("express");
const router = express.Router();
const pokemonCtrl = require("../controllers/pokemons");
const pokemon = require("../models/pokemon");
const ensureLoggedIn = require("../config/ensureLoggedIn");

module.exports = router;

router.get("/", pokemonCtrl.index);
router.get("/search", ensureLoggedIn, pokemonCtrl.searchPokemon);
router.get("/:id", ensureLoggedIn, pokemonCtrl.show);
router.post("/save", ensureLoggedIn, pokemonCtrl.savePokemon);

router.delete("/:id", ensureLoggedIn, pokemonCtrl.deleteOnePokemon);
