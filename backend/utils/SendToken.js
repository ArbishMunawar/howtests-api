import jwt from "jsonwebtoken";
import { ApiResponse } from "./ApiResponse.js"; 

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

  return res.json(
    new ApiResponse(
      200,
      {
        token,
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
      "Login/Register successful"
    )
  );
};

export default sendToken;
