import express from "express";
import {createArticle, getAllArticles } from "./articles.controller.js";

const router = express.Router();

router.post("/list",createArticle);
router.get("/list",getAllArticles);

export default router;
