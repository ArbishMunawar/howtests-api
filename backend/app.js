import express, { urlencoded } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoutes from "./modules/User/user.route.js";
import articleRoutes from "./modules/Articles/article.route.js";
import authorRoutes from "./modules/Authors/author.route.js";
import bookRoutes from "./modules/Books/books.route.js";
import faqRoutes from "./modules/Faq/faqs.route.js";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRoutes from "./modules/Admin/admin.route.js";
import categoryRoutes from "./modules/Categories/category.route.js";
dotenv.config({ path: ['.env.local', '.env'] });

const app = express();
const PORT = 8000;

// DB connection
connectDB();
connectCloudinary();

//middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

// Routes
app.use("/api/v1/faq", faqRoutes);
app.use("/api/v1/book", bookRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/author", authorRoutes);
app.use("/api/v1/article", articleRoutes);
app.use("/api/v1/category", categoryRoutes);

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.send("Backend working!");
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
