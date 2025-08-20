import express from "express";
import { createAuthor, getAllAuthors, getAuthorById} from "./author.controller.js";

const router = express.Router();

router.post("/",createAuthor);
router.get("/",getAllAuthors);
router.get("/:id",getAuthorById);

export default router;
