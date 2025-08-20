import bookModel from "./books.model.js";

// Create Author
const createBook = async (req, res) => {
  try {
    const book = await bookModel.create(req.body);

    res.status(201).json({ message: "Book created successfully", book });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating book", error: error.message });
  }
};
const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching books", error: error.message });
  }
};

export { createBook, getAllBooks };
