const Game = require("../models/game");

module.exports = {
  index,
  show,
  new: newGame,
  create,
};

async function index(req, res) {
  res.render("games", { games: await Game.find({}) });
}

async function show(req, res) {
  const game = await Game.findById(req.params.id);
  res.render("games/show", { title: "Games", game });
}

function newGame(req, res) {
  res.render("games/new", { title: "Add Game", errorMsg: "" });
}

function create(req, res) {
  game.create(req.body);
  res.redirect("/games");
}
