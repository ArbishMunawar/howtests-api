import articleModel from "./article.model.js";
import "../Authors/author.model.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";

// Create Article
const createArticle = asyncHandler(async (req, res) => {
  const { title, abstract, content, category, author, image, tags, tableOfContents } = req.body;
  if (!title) {
    throw new ApiError(400, "Article title is required");
  }

  const slug = await generateUniqueSlug(title, articleModel);
  const article = await articleModel.create({ title, abstract, content, category, author, image, tags, tableOfContents, slug });
  res
    .status(201)
    .json(new ApiResponse(201, article, "Article created successfully"));
});

// Get All Articles
const getAllArticles = asyncHandler(async (req, res) => {
  const articles = await articleModel.find().populate({ path: "author", select: "name" });;
  res
    .status(200)
    .json(new ApiResponse(200, articles, "Articles found successfully"));
});

export { createArticle, getAllArticles };
