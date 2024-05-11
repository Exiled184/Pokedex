const Schema = mongoose.Schema;

const gameSchema = new Schema(
  {
    gameTitle: {
      type: String,
      enum: ["Red", "Blue", "Yellow"],
    },
    releaseYear: {
      type: Date,
    },
    console: {
      type: String,
      enum: ["Nintendo Gameboy", "Nintendo Gameboy Colour"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Games", gameSchema);
