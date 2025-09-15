const express=require('express');
const router=express.Router();
const {handleUserLogin,handleUserSignup}= require('../controllers/userController')

router.get('/:id', function(req,res){
    res.end("Route is Under Const");
})

router.post('/login',handleUserLogin);

router.post('/signup',handleUserSignup);
module.exports=router;