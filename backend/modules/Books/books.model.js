const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
        required: true,
      },
    ],
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

    keyfeatures: {
      type: { String },
      default: [],
    },
    whyChooseThisBook: {
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
