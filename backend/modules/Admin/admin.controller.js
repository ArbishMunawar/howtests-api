import jwt from "jsonwebtoken";

const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "admin123";

// Generate JWT token
const generateToken = () => {
  return jwt.sign({ role: "admin" }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Admin login
export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = generateToken();
    // Set JWT token in httpOnly cookie
    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    return res.json({ success: true, token,message: "Admin logged in" });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

// Admin dashboard
export const adminDashboard = (req, res) => {
  return res.json({ success: true, message: "Welcome to admin dashboard" });
};
