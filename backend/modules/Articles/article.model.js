const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: String,
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
    abstract: String,
    content: {
      type: {
        type: String,
        enum: ["paragraph", "image", "video", "list"],
        required: true,
      },
      data: mongoose.Schema.Types.Mixed,
    },
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "category",
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
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "review" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("articles", articleSchema);
