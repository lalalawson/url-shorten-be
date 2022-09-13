const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});

module.exports = mongoose.model("Url", URLSchema);
