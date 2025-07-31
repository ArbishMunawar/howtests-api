const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
},{timestamps: true});

const authorModel=mongoose.model("author",authorSchema);
module.exports=authorModel;