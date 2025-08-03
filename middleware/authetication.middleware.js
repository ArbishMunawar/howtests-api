const JWT = require("jsonwebtoken");
const userModel = require("../model/user.model");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;

 const checkForAuthentication = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (!token) {
    return res.status(401).json({
      success: false,
      msg: "UnAuthorized",
    });
  }

  try {
    const payLoad = JWT.verify(token, secretKey);
    req.user = await userModel.findById(payLoad.id).select("password ");
    if (!req.user) {
      return res.status(401).json({
        success: false,
        msg: "User not found",
      });
    }
    next();
  } catch (error) {
    console.error("Token verification error:", error);
  }
};


module.exports = {
  checkForAuthentication,}