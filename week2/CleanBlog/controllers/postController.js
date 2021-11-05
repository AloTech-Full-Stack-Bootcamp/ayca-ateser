const Post=require("../models/Posts");
const fs=require("fs");
exports.getAllPosts=async(req,res)=>{

    const posts=await Post.find({}).sort("-dateCreated")
    console.log(posts)
    res.render("index",{
        posts,
    });
};

exports.getPost=async(req,res)=>{
    const post=await Post.findById(req.params.id);
    res.render("post",{
        post,
    })
};
exports.createPost=function(req,res){
     console.log(req.body)
     Post.create(req.body);
     res.redirect("/");
 };

 exports.updatePost=async(req,res)=>{
     const post=await Post.findOne({_id:req.params.id});
     post.title=req.body.title;
     post.detail=req.body.detail;
     post.save();
     res.redirect(`/posts/${req.params.id}`);
 };
 exports.deletePost=async(req,res)=>{
     await Post.findByIdAndRemove(req.params.id);
     res.redirect("/");
 };
 
 