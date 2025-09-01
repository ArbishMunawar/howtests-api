// const mongoose = require("mongoose");
import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
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
      default: "/images/userDeafult.png",
    },
    isActive: { type: Boolean, default: true },
    isVerified: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const authorModel = mongoose.model("Author", authorSchema);
export default authorModel;
