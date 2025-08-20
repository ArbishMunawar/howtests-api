import authorModel from "./author.model.js";

// Create Author
const createAuthor = async (req, res) => {
  try {
    const author = await authorModel.create(req.body);

    res.status(201).json({ message: "Author created successfully", author });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating author", error: error.message });
  }
};
// get all authors
const getAllAuthors = async (req, res) => {
  try {
    const authors = await authorModel.find();
    res.status(200).json(authors);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching authors", error: error.message });
  }
};

export { createAuthor, getAllAuthors };
