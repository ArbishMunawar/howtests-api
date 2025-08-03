const mongoose = require("mongoose");
// const authorModel = require("./Author")

const booksSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
       index: true,
    },
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    views: {
      type: Number,
      default: 0,
    },
    shared: {
      type: Number,
      default: 0,
    },
    downloads: {
      type: Number,
      default: 0,
    },
    summary: String,
    content: String,
    keyfeatures: {
      type: { String },
      default: [],
    },
    whychsooseus: {
      type: { String },
      default: [],
    },
    subjectcovering: {
      type: { String },
      default: [],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("books", booksSchema);
