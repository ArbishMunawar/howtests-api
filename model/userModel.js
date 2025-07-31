const mongoose = require("mongoose");
const { Schema, model } = mongoose;


const userSchema=new Schema({
  userName:{
    type:String,
    required:true
  },
   name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  
   password:{
    type:String,
    required:true,
  },

  isAdmin:{
    type:Boolean,
    default:false,
  },
 date:{
    type:Date,
    default:Date.now,
  },
},{timestamps:true});

const userModel= mongoose.model("user",userSchema);

module.exports=userModel;