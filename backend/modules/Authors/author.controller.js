import authorModel from "./author.model.js";
import { ApiError } from "../../utils/ApiError.utils.js";
import { ApiResponse } from "../../utils/ApiResponse.utils.js";
import { asyncHandler } from "../../utils/asyncHandler.utils.js";


// Create Author
const createAuthor = asyncHandler(async (req, res) => {
  const author = await authorModel.create(req.body);

  res.status(201).json(new ApiResponse(201, author,"Author created successfully"));
});


// get all authors
const getAllAuthors = asyncHandler(async (req, res) => {
  const authors = await authorModel.find();
  res
    .status(200)
    .json(new ApiResponse(200,authors, "Authors fetched successfully"));
});


// get by id
const getAuthorById = asyncHandler(async (req, res) => {
  const author = await authorModel.findById(req.params.id);
  if (!author) {
    throw new ApiError(404, "Author not found");
  }
  res.status(200).json(new ApiResponse(200,author, "Author fetched successfully"));
});
export { createAuthor, getAllAuthors, getAuthorById };
