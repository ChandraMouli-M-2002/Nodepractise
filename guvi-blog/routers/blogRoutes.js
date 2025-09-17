const express=require('express');
const router=express.Router();
const multer=require("multer");
const{renderCreateBlogPage,createNewBlogPost,renderBlogPostPage,handleDeleteBlog} =require('../controllers/blogController');
const {onlyGrantAccessTo,ensureAuthticated}=require('../middlewares/auth');


const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./public/uploads/");
    },
    filename:(req,file,cb)=>{
        // cb(null,file.filename);
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload=multer({storage})

router.get('/create',ensureAuthticated,renderCreateBlogPage);

router.post('/create',ensureAuthticated,upload.single("coverimage"), createNewBlogPost);

router.get('/delete/:id',onlyGrantAccessTo('Admin'),handleDeleteBlog);

router.get('/view/:id',renderBlogPostPage);

module.exports=router;
