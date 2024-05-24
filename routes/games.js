var express = require("express");
var router = express.Router();

const gameCtrl = require("../controllers/games");
const game = require("../models/game");
const ensureLoggedIn = require("../config/ensureLoggedIn");

router.get("/", gameCtrl.index);
router.get("/new", ensureLoggedIn, gameCtrl.new);
router.get("/:id", ensureLoggedIn, gameCtrl.show);
router.post("/", ensureLoggedIn, gameCtrl.create);
router.delete("/:id", ensureLoggedIn, gameCtrl.delete);

module.exports = router;
