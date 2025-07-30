const express = require("express");
const router = express.Router();
const {createArticle,getAllArticles,getArticleById} = require("../controllers/articleController");

router.post("/", createArticle);
router.get("/", getAllArticles);
router.get("/:id", getArticleById);  

module.exports = router;