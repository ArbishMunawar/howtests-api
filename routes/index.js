// const {Router}=require("express")
// const userModel=require("../model/userModel");
// const { name } = require("ejs");
// const bcrypt = require("bcrypt");
// const router=Router();

// //get homepage
// router.get("/",(req,res,next)=>{
//   res.render("index")
// })


// router.post("/signup", async(req,res)=>{
//     const{userName,name, email, password}=req.body;
//     let emailCon=await userModel.findOne({email:email}) 
//     if(emailCon){
//       return  res.json({
//             success:false,
//             msg:"Email already exists"
//         })
//     }else{
//         bcrypt.genSalt(12, (err, salt) => {
//   bcrypt.hash(password, salt,async function(err, hash) {
//     if (err) {
//       return res.status(500).json({ success: false, msg: "Error hashing password" });

//       let user= await userModel.create({
//         userName: userName,
//         name:name,
//         email: email,
//         password: hash,
//       });
//       return res.json({
//         success:true,
//         msg:"User created successfully",        
//       })
//     }
//   });
// });

//     }

// return res.redirect("/")
// })
// module.exports=router;


const { Router } = require("express");
const userModel = require("../model/userModel");
const bcrypt = require("bcryptjs");
const router = Router();

// Get homepage
router.get("/", (req, res) => {
  res.render("index");
});

// Signup route
router.post("/signup", async (req, res) => {
  const { userName, name, email, password } = req.body;

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
      userName,
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
            userName: user.userName,
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
    })


module.exports = router;
