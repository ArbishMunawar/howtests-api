const express = require("express");
const router = express.Router();
const {createBook,getAllBooks,getBookById,updateBookById,deleteBookById} = require("../controllers/books.controller");

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);  
router.put("/:id", updateBookById);  
router.delete("/:id", deleteBookById);  

module.exports = router;