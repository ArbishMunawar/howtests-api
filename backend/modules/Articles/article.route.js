import express from "express";
import {createArticle, getAllArticles } from "./articles.controller.js";

const router = express.Router();

router.post("/",createArticle);
router.get("/",getAllArticles);

export default router;
