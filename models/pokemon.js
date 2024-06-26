const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
  },
  types: [
    {
      type: String,
      required: true,
    },
  ],
  abilities: [
    {
      type: Array,
      required: true,
    },
  ],
  stats: [
    {
      name: {
        type: String,
        required: true,
      },
      base_stat: {
        type: Number,
        required: true,
      },
    },
  ],
  height: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  sprites: {
    front_default: {
      type: String,
    },
    back_default: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Pokemon", pokemonSchema);
