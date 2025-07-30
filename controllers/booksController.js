const Book = require("../model/Books");

exports.createBook = async (req, res) => {
    try{
        const book=await Book.create(req.body);
        res.status(201).json({message:"Book craeted successfully",book});
    }catch(error){
        res.status(500).json({message:"Error creating book",error:error.message});
    }
}

exports.getAllBooks=async(req,res)=>{
     const authorId = req.query.author;
  const book= await Book.find({ author: authorId }).populate("author");
    res.status(200).json(book);
}


exports.getBookById=async(req,res)=>{
    const book= await Book.findById(req.params.id).populate("author");
    res.status(200).json(book);
}
