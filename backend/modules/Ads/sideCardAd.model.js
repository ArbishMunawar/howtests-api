const mongoose = require("mongoose");

const sideCardAdSchema = new mongoose.Schema({
  image: {
      type: String,
    },
    heading: {
      type: String,
    },
    description: {
      type: String,
    },
    buttonText: {
      type: String,
    },
    buttonUrl: {
      type: String,
    },
},{timestamps: true});

const sideCardAd = mongoose.model("sideCardAd", sideCardAdSchema);
module.exports = sideCardAd;
