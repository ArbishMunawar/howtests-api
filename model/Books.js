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
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    category: [
      {
        type: String,
        required: true,
      },
    ],
    adds: [
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
    reviews: String,
  },

  { timestamps: true }
);

module.exports = mongoose.model("books", booksSchema);
