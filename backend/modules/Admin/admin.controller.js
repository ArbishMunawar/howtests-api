import articleModel from "../Articles/article.model.js";
import CategoryModel from "../Categories/category.model.js";
import booksModel from "../Books/books.model.js";
import authorModel from "../Authors/author.model.js";
import bcrypt from "bcryptjs";
import User from "../User/user.model.js";
import sendToken from "../../utils/SendToken.js";


export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || user.role !== "admin") {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }
    return sendToken(user, res);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

//API to get dashboard data for admin

const adminDashboard = async (req, res) => {
  try {
    const [articles, categories, books, authors] = await Promise.all([
      articleModel.countDocuments(),
      CategoryModel.countDocuments(),
      booksModel.countDocuments(),
      authorModel.countDocuments(),
    ]);

    const dashData = {
      articles,
      categories,
      books,
      authors,
    };

    res.json({ success: true, dashData });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
export { adminDashboard };

// jodit
//
