const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    versionTitle: {
      type: String,
      enum: ["Red", "Blue", "Yellow", "Fire Red", "Leaf Green"],
    },
    releaseYear: {
      type: String,
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
    trainerName: {
      type: String,
      required: true,
    },
    pokemon: [
      {
        type: Schema.Types.ObjectId,
        ref: "Pokemon",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Games", gameSchema);
