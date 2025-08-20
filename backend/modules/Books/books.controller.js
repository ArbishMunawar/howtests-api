import bookModel from "./books.model.js";
// import { ApiError } from "../../utils/ApiError.utils.js";
import { ApiResponse } from "../../utils/ApiResponse.utils.js";
import { asyncHandler } from "../../utils/asyncHandler.utils.js";

// Create Author
const createBook = asyncHandler(async (req, res) => {
  const book = await bookModel.create(req.body);

  res.status(201).json(new ApiResponse(201, book, "Book created successfully"));
});

//get all books
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await bookModel.find();
  res.status(200).json(new ApiResponse(200, books, "Found All Books"));
});

export { createBook, getAllBooks };
