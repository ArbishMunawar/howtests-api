import bookModel from "./books.model.js";
import { ApiResponse } from "../../utils/ApiResponse.utils.js";
import { asyncHandler } from "../../utils/asyncHandler.utils.js";
import generateUniqueSlug from "../../utils/GenerateSlug.utils.js";

// Create Book
const createBook = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    throw new ApiError(400, "Book title is required");
  }

  const slug = await generateUniqueSlug(title, bookModel);
  const book = await bookModel.create({ ...req.body, slug });

  res.status(201).json(new ApiResponse(201, book, "Book created successfully"));
});

//get all books
const getAllBooks = asyncHandler(async (req, res) => {
  const books = await bookModel.find();
  res.status(200).json(new ApiResponse(200, books, "Found All Books"));
});

export { createBook, getAllBooks };
