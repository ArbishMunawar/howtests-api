import articleModel from "./article.model.js";
import "../Authors/author.model.js";

// Create Article
const createArticle = async (req, res) => {
  try {
    const article = await articleModel.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "Article created successfully", data: article });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error creating article", error: error.message });
  }
};

// Get All Articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await articleModel.find().populate("author");
    res
      .status(200)
      .json({ success: true, message: "Articles found successfully", data: articles });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error finding articles", error: error.message });
  }
};

export { createArticle, getAllArticles };
