// const mongoose = require("mongoose");
import mongoose from 'mongoose'
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    image: {
      type: String,
  
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
     enum: ["user", "author", "admin"], 
      default: "user",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
