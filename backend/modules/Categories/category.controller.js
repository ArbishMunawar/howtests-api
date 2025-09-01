import categoryModel from "./category.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";

// Create Author
const createCategory = asyncHandler(async (req, res) => {
  const { title } = req.body;
  if (!title) {
    throw new ApiError(400, "Categorie title is required");
  }
  const slug = await generateUniqueSlug(title, categoryModel);

  const category = await categoryModel.create({
    ...req.body,
    slug,
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
