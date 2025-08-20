const mongoose = require("mongoose");

const advertiseCardAdSchema = new mongoose.Schema(
  {
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
    footerText: {
      type: String,
      default: "Advertise with Us",
    },
    footerLogo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CardAd = mongoose.model("advertiseCardAd", advertiseCardAdSchema);
module.exports = CardAd;
