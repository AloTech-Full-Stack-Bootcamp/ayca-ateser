const Post=require('../models/Posts');

exports.getAboutPage=(req,res)=>{
    res.render("about");
};

exports.getAddPage=(req,res)=>{
    res.render("add_post");
};

exports.getPosts=(req,res)=>{
    res.render('post');
}
exports.getEditPage=async(req,res)=>{
    const post=await Post.findOne({_id:req.params._id});
    res.render('edit_post',{
        post
    })
};