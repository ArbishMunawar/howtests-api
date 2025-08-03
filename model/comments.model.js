const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    articleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "articles",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { tiemestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
