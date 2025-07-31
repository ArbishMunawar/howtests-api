const { Router } = require("express");
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const router = Router();

// Get homepage
router.get("/", (req, res) => {
  res.render("index");
});

// Signup route
router.post("/signup", async (req, res) => {
  const { username, name, email, password } = req.body;

  try {
    // Check if email already exists
    const emailExists = await userModel.findOne({ email });
    if (emailExists) {
      return res.json({
        success: false,
        msg: "Email already exists",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await userModel.create({
      username,
      name,
      email,
      password: hashedPassword,
    });

    return res.json({
      success: true,
      msg: "User created successfully",
    });
  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
});

//login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({
        success: false,
        msg: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        msg: "Invalid password",
      });
    }

    return res.json({
      success: true,
      msg: "Login successful",
      user: {
        username: user.username,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
});

module.exports = router;
