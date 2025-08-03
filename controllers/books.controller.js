const Book = require("../model/books.model");

exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book craeted successfully", book });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating book", error: error.message });
  }
};

exports.getAllBooks = async (req, res) => {
  const authorId = req.query.author;
  const book = await Book.find().populate("author");
  res.status(200).json(book);
};

exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id).populate("author");
  res.status(200).json(book);
};

exports.updateBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Book.findByIdAndUpdate(id, req.body, { new: true })
      .populate("author")
      .exec();

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

exports.deleteBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndDelete(id);
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
