const mongoose = require("mongoose");

const articleReviewSchema = new mongoose.Schema({
  article: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "article",
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

const ArticleReview = mongoose.model("ArticleReview", articleReviewSchema);
module.exports = ArticleReview;
