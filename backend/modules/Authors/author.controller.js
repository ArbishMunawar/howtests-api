import authorModel from "./author.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

// Create Author
const createAuthor = asyncHandler(async (req, res) => {
  const { name, bio, about, profession, credentials, isActive, isVerified } =
    req.body;
  const imageFile = req.file;
  if (!name) {
    throw new ApiError(400, "Author name is required");
  }
  if (!imageFile) {
    throw new ApiError(400, "Category image is required");
  }
  const slug = await generateUniqueSlug(name, authorModel);
  const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
    resource_type: "image",
    folder: "categories",
  });

  const author = await authorModel.create({
    bio,
    about,
    profession,
    credentials,
    isActive,
    isVerified,
    slug,
    image: imageUpload.secure_url,
  });

  res
    .status(201)
    .json(new ApiResponse(201, author, "Author created successfully"));
});

// get all authors
const getAllAuthors = asyncHandler(async (req, res) => {
  const authors = await authorModel.find();
  res
    .status(200)
    .json(new ApiResponse(200, authors, "Authors fetched successfully"));
});

// get by id
const getAuthorById = asyncHandler(async (req, res) => {
  const author = await authorModel.findById(req.params.id);
  if (!author) {
    throw new ApiError(404, "Author not found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, author, "Author fetched successfully"));
});
export { createAuthor, getAllAuthors, getAuthorById };
