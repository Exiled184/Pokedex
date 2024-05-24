const Game = require("../models/game");
const Pokemon = require("../models/pokemon");
module.exports = {
  index,
  show,
  new: newOneGame,
  create,
  delete: deleteOneGame,
};

async function index(req, res) {
  res.render("games", { games: await Game.find({}) });
}

async function show(req, res) {
  const game = await Game.findById(req.params.id).populate("pokemon");
  const pokemon = await Pokemon.find({ _id: { $nin: game.pokemon } }).sort(
    "name"
  );
  res.render("games/show", { title: "Games", game, pokemon });
}

function newOneGame(req, res) {
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

async function deleteOneGame(req, res) {
  const game = await Game.findOne({
    _id: req.params.id,
  });
  await game.deleteOne();
  res.redirect("/games");
}
