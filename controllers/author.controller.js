const Author = require("../model/author.model.js");

exports.createAuthor = async (req, res) => {    
    try {
        const author =await Author.create(req.body);
       
        res.status(201).json({ message: "Author created successfully", author });
    } catch (error) {
        res.status(500).json({ message: "Error creating author", error: error.message });
    }
    }

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching authors", error: error.message });
    }
}

exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        res.status(200).json(author);
    } catch (error) {
        res.status(500).json({ message: "Error fetching author", error: error.message });
    }
}

exports.updateAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const article = await Author.findByIdAndUpdate(id, req.body, { new: true });

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


exports.deleteAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Author.findByIdAndDelete(id);
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