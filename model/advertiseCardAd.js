const mongoose = require("mongoose");

const advertiseCardAdSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    heading: {
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
    buttonUrl: {
      type: String,
      required: true,
    },
    footerText: {
      type: String,
      default: "Advertise with Us",
    },
    footerLogo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const CardAd = mongoose.model("advertiseCardAd", advertiseCardAdSchema);
module.exports = CardAd;
