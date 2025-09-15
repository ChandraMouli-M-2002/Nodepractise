const express=require('express');
const router=express.Router();

router.get('/blog',function(req,res){
    res.end();
});

module.exports=router;
