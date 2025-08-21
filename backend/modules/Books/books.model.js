// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const booksSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        // required: true,
      },
    ],
    slug: {
      type: String,
    
      unique: true,
      index: true,
    },
    tags: {
      type: [String],
      required: true,
    },
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
      type: String,
    },
    whyChooseThisBook: {
      type: String,
    },
    subjectcovering: {
      type: String,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Book", booksSchema);
