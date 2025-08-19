const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = 8000;


//db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log(" MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


app.get("/", async (req, res) => {
  console.log("Hello from server");
  res.send("Backend working!");
});

// Start the server
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
