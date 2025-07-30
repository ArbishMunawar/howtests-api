const express = require("express");
const router = express.Router();
const {createBook,getAllBooks,getBookById} = require("../controllers/booksController");

router.post("/", createBook);
router.get("/", getAllBooks);
router.get("/:id", getBookById);  

module.exports = router;