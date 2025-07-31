const mongoose = require("mongoose");


const articleSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  content: String,
  image: String,
  author:{
     type: mongoose.Schema.Types.ObjectId,
      ref: "author" 
    },
  category: String,
  date: String,
},{timestamps: true});

module.exports = mongoose.model("articles", articleSchema);