const mongoose = require("mongoose");

const singleImageAdSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const singleImageAd = mongoose.model("singleImageAd", singleImageAdSchema);
module.exports = singleImageAd;
