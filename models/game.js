const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    gameTitle: {
      type: String,
      enum: ["Red", "Blue", "Yellow", "Fire Red", "Leaf Green"],
    },
    releaseYear: {
      type: Date,
    },
    console: {
      type: String,
      enum: [
        "Nintendo Gameboy",
        "Nintendo Gameboy Colour",
        "Nintendo Gameboy Advance",
        "Nintendo Gameboy Advance SP",
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Games", gameSchema);
