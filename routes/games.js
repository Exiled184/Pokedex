var express = require("express");
var router = express.Router();

const gameCtrl = require("../controllers/games");

router.get("/", gameCtrl.index);
router.get("/new", gameCtrl.new);
router.get("/:id", gameCtrl.show);
router.post("/", gameCtrl.create);

module.exports = router;
