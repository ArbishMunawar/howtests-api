const mongoose = require("mongoose");

const bannerAdSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  buttonText: {
    type: String,
    required: true,
  },
  buttonUrl: {
    type: String,
    required: true,
  },
},{timestamps: true});

const BannerAd = mongoose.model("BannerAd", bannerAdSchema);
module.exports = BannerAd;
