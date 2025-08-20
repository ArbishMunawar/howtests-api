import express from "express";
import {createBook, getAllBooks } from "./books.controller.js";

const router = express.Router();

router.post("/",createBook);
router.get("/",getAllBooks);

export default router;
