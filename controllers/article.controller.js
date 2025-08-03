const Article = require("../model/article.model.js");

exports.createArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.create(req.body);
    res.status(201).json({ message: "Article craeted successfully", article });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating article", error: error.message });
  }
};

exports.getAllArticles = async (req, res) => {
  const article = await Article.find().populate("author").exec();
  res.status(200).json(article);
};

exports.getArticleById = async (req, res) => {
  const article = await Article.findById(req.params.id)
    .populate("author")
    .exec();
  res.status(200).json(article);
};


exports.updateArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Article.findByIdAndUpdate(id, req.body, { new: true }).populate("author").exec();
    //first we find the article by id and then update it with the new data from req.body and new options returns the udpdated article
    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.status(200).json({ message: "Article updated successfully", article });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating article", error: error.message });
  }
};


exports.deleteArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Article.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting book", error: error.message });
  }
};
