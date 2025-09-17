const Comment=require('../models/comment')


exports.handleCreateComment = async function(req,res){
    if(!req.user) return res.json({error:"You are not logged in"});
    const{blogId,content}= req.body;
    await Comment.create({blogId, content,CreatedBy:req.user._id});
    return res.json({message:"success"});
}