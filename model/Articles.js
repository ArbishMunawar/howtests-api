const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
    },
    abstract: String,
    content: String,
    tableOfContents: [
      {
        type: String,
        required: true,
      },
    ],
    tags: [
      {
        type: String,
        required: true,
      },
    ],
    image: String,
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
    reviews: {
      type: String,
    },
    comments: [
      {
        name: String,
        contactNo: String,
        email: String,
        message: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("articles", articleSchema);
