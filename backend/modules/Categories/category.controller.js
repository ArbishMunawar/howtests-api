import { v2 as cloudinary } from "cloudinary";
import categoryModel from "./category.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const createCategory = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const imageFile = req.file;

  if (!title) {
    throw new ApiError(400, "Category title is required");
  }
  if (!imageFile) {
    throw new ApiError(400, "Category image is required");
  }
  const slug = await generateUniqueSlug(title, categoryModel);

  const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
    resource_type: "image",
    folder: "categories",
  });

  const category = await categoryModel.create({
    title,
    description,
    slug,
    image: imageUpload.secure_url,
  });

  res
    .status(201)
    .json(new ApiResponse(201, category, "Category created successfully"));
});

// get all Categories
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await categoryModel.find({ isActive: true });
  res
    .status(200)
    .json(new ApiResponse(200, categories, "Categories fetched successfully"));
});

// get by id
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await categoryModel.findById(req.params.id);
  if (!category) {
    throw new ApiError(404, "category not found");
  }
  res
    .status(200)
    .json(new ApiResponse(200, category, "Author fetched successfully"));
});
export { createCategory, getAllCategories, getCategoryById };
