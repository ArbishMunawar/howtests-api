// const mongoose = require("mongoose");
import mongoose from "mongoose";

const articleSchema = new mongoose.Schema(
  {
    title: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    abstract: String,
    content: {
      type: String,
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
        ref: "Category",
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

export default mongoose.model("Article", articleSchema);
