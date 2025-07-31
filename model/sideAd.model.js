const mongoose = require("mongoose");

const sideAdSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      required: true,
    },
    buttonLink: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SideAd = mongoose.model("SideAd", sideAdSchema);

module.exports = SideAd;
