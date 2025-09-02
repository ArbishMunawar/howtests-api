import express from "express";
import { createCategory, getAllCategories, getCategoryById} from "./category.controller.js";
// import upload from "../middleware.js/multer.middleware.js";
const router = express.Router();

router.post("/",createCategory);
router.get("/",getAllCategories);
router.get("/:id",getCategoryById);

export default router;
