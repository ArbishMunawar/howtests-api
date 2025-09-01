import userModel from "./user.model.js";
import bcrypt from "bcryptjs";
import { ApiError } from "../../utils/ApiError.js";
import { asyncHandler } from "../../utils/asyncHandler.js";
import sendToken from "../../utils/SendToken.js";



// Register user
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password, name,role } = req.body;

  if (!username || !email || !password || !name) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    throw new ApiError(400, "Email already registered");
  }

  // hashing the passwoed
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const userData = {
    name,
    username,
    email,
    password: hashedPassword,
    role: role || "user" 
  };

  const newUser = new userModel(userData);
  await newUser.save();

  // creates the token and store in cookie
  sendToken(newUser, res);
});

// Login user

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    throw new ApiError(400, "User not found");
  }
  const isMacth = await bcrypt.compare(password, user.password);
  if (!isMacth) {
    throw new ApiError(400, "Invalid Credentials");
  }

  sendToken(user, res);
});




export { loginUser, registerUser };
