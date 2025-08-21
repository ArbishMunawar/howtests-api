import articleModel from "./article.model.js";
import "../Authors/author.model.js";
import { ApiResponse } from "../../utils/ApiResponse.utils.js";
import { asyncHandler } from "../../utils/asyncHandler.utils.js";

// Create Article
const createArticle = asyncHandler(async (req, res) => {
  const article = await articleModel.create(req.body);
  res
    .status(201)
    .json(new ApiResponse(201, article, "Article created successfully"));
});

// Get All Articles
const getAllArticles = asyncHandler(async (req, res) => {
  const articles = await articleModel.find().populate("author");
  res
    .status(200)
    .json(new ApiResponse(200, articles, "Articles found successfully"));
});

export { createArticle, getAllArticles };
