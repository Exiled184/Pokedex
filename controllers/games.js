const Game = require("../models/game");

module.exports = {
  index,
  show,
  new: newGame,
  create,
  delete: deleteGame,
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

async function create(req, res) {
  try {
    await Game.create(req.body);
    res.redirect("/games");
  } catch {
    console.log(errorMsg);
    res.render("games/new", { errorMsg: "Try Again" });
  }
}

async function deleteGame(req, res) {
  const game = await Game.findOne({
    _id: req.params.id,
  });
  await game.deleteOne();
  res.redirect("/games");
}
