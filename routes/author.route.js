const express = require("express");
const router = express.Router();
const {createAuthor,getAllAuthors,getAuthorById} = require("../controllers/author.controller");

router.post("/", createAuthor);
router.get("/", getAllAuthors);
router.get("/:id", getAuthorById);  

module.exports = router;