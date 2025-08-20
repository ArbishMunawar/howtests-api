// const mongoose = require("mongoose");
import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      
    },
    about: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    profession: {
      type: String,
      required: true,
    },
    credentials: {
      qualification: String,
      degree: String,
      university: String,
      city: String,
      province: String,
      country: String,
    },

    image: {
      type: String,
    },
    isVerified: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const authorModel = mongoose.model("Author", authorSchema);
 export default authorModel;
