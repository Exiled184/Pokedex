var express = require("express");
var router = express.Router();

const gameCtrl = require("../controllers/games");
const game = require("../models/game");
const ensureLoggedIn = require("../config/ensureLoggedIn");
const pokemonCtrl = require("../controllers/pokemons");

router.get("/", gameCtrl.index);
router.get("/new", ensureLoggedIn, gameCtrl.new);
router.get("/:id", ensureLoggedIn, gameCtrl.show);
router.post("/", ensureLoggedIn, gameCtrl.create);
router.post("/:id/pokemons", ensureLoggedIn, pokemonCtrl.addPokemonToGame);
router.delete("/:id", ensureLoggedIn, gameCtrl.delete);

module.exports = router;
