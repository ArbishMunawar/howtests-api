const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    articles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "articles",
      },
    ],
   
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("category", categorySchema);

module.exports = CategoryModel;
