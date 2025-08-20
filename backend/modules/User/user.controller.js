import userModel from "./user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// creates jwt token here
const sendToken = (user, res) => {
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
      email: user.email,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "7d" }
  );

  // send cookies
  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.json({ message: "Success",token, user });
};

// Register user
const registerUser = async (req, res) => {
  try {
    const { username, email, password, name } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: true, message: "Email already registered" });
    }

    // hashing the passwoed
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userData = {
      name,
      username,
      email,
      password: hashedPassword,
    };

    const newUser = new userModel(userData);
    await newUser.save();

    // creates the token and store in cookie
    sendToken(newUser,res);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error registering user",
      error: error.message,
    });
  }
};

// Login user

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email })
    if (!user)
      return res.status(400).json({
        status: false,
        message: "User not found",
      });
    const isMacth = await bcrypt.compare(password, user.password);
    if (!isMacth)
      return res.status(400).json({
        status: false,
        message: "Invalid credentials",
      });

    sendToken(user,res);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error in login",
      error: error.message,
    });
  }
};

export { loginUser, registerUser };
