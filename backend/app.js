import express , { urlencoded }from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import cookieParser from "cookie-parser";
import userRoutes from "./modules/User/user.route.js";
import articleRoutes from "./modules/Articles/article.route.js";
import authorRoutes from "./modules/Authors/author.route.js";
import bookRoutes from "./modules/Books/books.route.js";

dotenv.config();
const app = express();
const PORT = 8000;

// DB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

// Routes
app.use("/api/v1/users", userRoutes); 
app.use("/api/v1/article", articleRoutes); 
app.use("/api/v1/author", authorRoutes); 
app.use("/api/v1/book", bookRoutes); 

app.get("/", (req, res) => {
  console.log("Hello from server");
  res.send("Backend working!");
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
