const mongoose=require("mongoose")
// const authorModel = require("./Author")

 const booksSchema=new mongoose.Schema({
    title:String,
    subtitle:String,
    image:String,
    category:String,
    author:{
        type:mongoose.Schema.Types.ObjectId,ref:"author"},
      tag:String,
      date:String,
      views:{
        type:Number,
        default:0
      },
      downloaded:String,
      shared:String,

 },{timestamps: true})

 module.exports=mongoose.model("books",booksSchema);