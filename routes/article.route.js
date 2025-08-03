const express = require("express");
const router = express.Router();
const {createArticle,getAllArticles,getArticleById,updateArticleById,deleteArticleById} = require("../controllers/article.controller");

router.post("/",createArticle);
router.get("/", getAllArticles);
router.get("/:id",getArticleById);  
router.put("/:id",updateArticleById);  
router.delete("/:id", deleteArticleById);  

module.exports = router;