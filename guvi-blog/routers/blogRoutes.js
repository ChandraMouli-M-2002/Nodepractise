const express=require('express');
const router=express.Router();

router.get('/',function(req,res){
    if(!req.user) return res.redirect('/login')
    res.end('ok');
});

module.exports=router;
