const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    profession: {
      type: String,
      required: true,
    },
    articlespublished: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articles",
      },
    ],
    bookspublished: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "books",
      },
    ],
    monthlyreaders: {
      type: Number,
      default: 0,
    },
    alltimereaders: {
      type: Number,
      default: 0,
    },
    credentials: {
      qualification: String,
      degree: String,
      university: String,
      city: String,
      province: String,
      country: String,
    },

    image: {
      type: String,
    },
    isVerified: { type: Boolean, dafault: true },
  },
  { timestamps: true }
);

const authorModel = mongoose.model("author", authorSchema);
module.exports = authorModel;
