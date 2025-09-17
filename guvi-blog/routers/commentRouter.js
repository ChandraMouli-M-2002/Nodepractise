const express=require('express');
const router=express.Router();
const{handleCreateComment}=require('../controllers/commentController')
const {ensureAuthticated}=require('../middlewares/auth');

router.post('/create',ensureAuthticated,handleCreateComment)

module.exports=router;