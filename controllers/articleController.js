const Article = require("../model/articles");

exports.createArticle = async (req, res) => {
    const { id } = req.params;
    try{
        const article=await Article.create(req.body);
        res.status(201).json({message:"Article craeted successfully",article});
    }catch(error){
        res.status(500).json({message:"Error creating article",error:error.message});
    }
}

exports.getAllArticles=async(req,res)=>{
     const authorId = req.query.author;
  const article= await Article.find({ author: authorId }).populate("author");
    res.status(200).json(article);
}


exports.getArticleById=async(req,res)=>{
    const article= await Article.findById(req.params.id).populate("author");
    res.status(200).json(article);
}
