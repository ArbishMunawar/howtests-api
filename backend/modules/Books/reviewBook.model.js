const mongoose = require("mongoose");

const bookReviewSchema = new mongoose.Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
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
  slug: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

const BookReview = mongoose.model("BookReview", bookReviewSchema);
module.exports = BookReview;
