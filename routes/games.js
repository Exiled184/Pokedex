var express = require("express");
var router = express.Router();

const gameCtrl = require("../controllers/games");
const game = require("../models/game");

router.get("/", gameCtrl.index);
router.get("/new", gameCtrl.new);
router.get("/:id", gameCtrl.show);
router.post("/", gameCtrl.create);
router.delete("/:id", gameCtrl.delete);

module.exports = router;
