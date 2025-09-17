const express=require('express');
const router=express.Router();
const multer=require("multer");

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

router.get('/create',function(req,res){
    res.render('createblog');
});

router.post('/create',upload.single("coverimage"), function(req,res){
    console.log(req.body);
    console.log(req.file);
    return res.render('createblog');
});

module.exports=router;
