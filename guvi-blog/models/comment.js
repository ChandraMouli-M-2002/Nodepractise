const mongoose=require('mongoose');

const commentScheme=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    CreatedBy:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
    },
    blogId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Blog",
    },
},{timestamps:true});

const Comment = mongoose.model('Comment',commentScheme);
module.exports=Comment; 