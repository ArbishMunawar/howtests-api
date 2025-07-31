const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookieParser = require('cookie-parser')
const userRoute = require("./routes/index");
const app = express();
require("dotenv").config();
const PORT = 8000;


//db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


//middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))

//Routes
app.use("/user", userRoute);
app.use("/books", require("./routes/book"));
app.use("/articles", require("./routes/article"));
app.use("/authors", require("./routes/author"));


//setting the engine
// app.set("view engine","ejs")
// app.set("views",path.resolve("./views"))


app.get("/", async (req, res) => {
  console.log("Hello from server");
  res.send("Backend working!");
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
