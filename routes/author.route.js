const express = require("express");
const router = express.Router();
const {createAuthor,getAllAuthors,getAuthorById,updateAuthorById,deleteAuthorById} = require("../controllers/author.controller");

router.post("/", createAuthor);
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);  
router.put("/:id", updateAuthorById);  
router.delete("/:id", deleteAuthorById);  

module.exports = router;