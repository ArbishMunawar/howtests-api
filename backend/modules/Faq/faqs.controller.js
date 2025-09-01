import FaqModel from "./faqs.model.js";
import { ApiError } from "../../utils/ApiError.js";
import { ApiResponse } from "../../utils/ApiResponse.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import generateUniqueSlug from "../../utils/GenerateSlug.js";

// Create FAQ
const createFaq = asyncHandler(async (req, res) => {
  const { question, answer } = req.body;

  if (!question || !answer) {
    throw new ApiError(400, "Question and Answer are required");
  }

  const slug = await generateUniqueSlug(question, FaqModel);
  const faq = await FaqModel.create({ ...req.body, slug });

  res.status(201).json(new ApiResponse(201, faq, "FAQ created successfully"));
});

//get all FAQ
const getAllFaq = asyncHandler(async (req, res) => {
  const faq = await FaqModel.find();
  res.status(200).json(new ApiResponse(200, faq, "FAQs fetched successfully"));
});

export { createFaq, getAllFaq };
