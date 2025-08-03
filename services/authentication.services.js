const JWT = require("jsonwebtoken");
require("dotenv").config();
const secretKey = process.env.JWT_SECRET_KEY;

createTokenForUser = (user) => {
  const token = JWT.sign(
    {
      id: user._id,
      // role: user.role,
      // email: user.email,
      // username: user.username,
      // name: user.name,
      // slug: user.slug,
    },
    secretKey,
    {
      expiresIn: "30d",
    }

  );
  
  return token;
};



module.exports={
    createTokenForUser,
}
