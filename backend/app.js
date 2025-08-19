const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser')
const { checkForAuthenticationCookie } = require("./middleware/authetication.middleware");
const {userRouter,bookRouter,authorRouter,articleRouter} = require("./routes/route");
const app = express();
require("dotenv").config();
const PORT = 8000;


//db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


//middlewares
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true, 
}));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
// app.use(checkForAuthenticationCookie({ cookieName: "token" }));

//Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/books", bookRouter);
app.use("/api/v1/articles",articleRouter);
app.use("/api/v1/authors",authorRouter);


app.get("/", async (req, res) => {
  console.log("Hello from server");
  res.send("Backend working!");
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
