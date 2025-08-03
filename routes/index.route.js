const { Router } = require("express");
const userModel = require("../model/user.model");
const bcrypt = require("bcryptjs");
const router = Router();
const slugify = require("slugify");
const { createTokenForUser } = require("../services/authentication.services");



router.get("/all", async (req, res) => {
  try {
    const users = await userModel.find({}); 
    res.json({ success: true, users });
  } catch (error) {
    console.error("Fetch Users Error:", error);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
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

      const slug = slugify(name, { lower: true });

    // Create new user
    const user = await userModel.create({
      username,
      name,
      email,
      password: hashedPassword,
      slug
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

    const token = createTokenForUser(user);
    // console.log("JWT Token:", token);

    //  res.cookie("token", token,{ httpOnly: true,}) 

    return res.json({
      success: true,
      msg: "Login successful",
      token,
      user
      // : {
      //   username: user.username,
      //   name: user.name,
      //   email: user.email,
      //   role: user.role,
      // },
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
