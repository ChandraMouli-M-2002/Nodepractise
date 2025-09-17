const express=require('express');
const router=express.Router();
const {handleUserLogin,handleUserSignup,renderUsersBlog}= require('../controllers/userController')
const {ensureAuthticated}=require('../middlewares/auth');

router.get('/logout', function(req,res){
    return res.clearCookie('Token').redirect('/');
})

router.post('/login',handleUserLogin);

router.post('/signup',handleUserSignup);

router.get('/blogs',ensureAuthticated,renderUsersBlog );


module.exports=router;