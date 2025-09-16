const User= require('../models/user');
const {generateTokenForUser}=require('../utils/auth');


exports. handleUserLogin =async function(req,res){
    const{ email , password} = req.body;
    // console.log(email,password,'from post') 
    try{
        if(!email || !password) throw new Error('Email and Password are required');
        const user=await User.findOne({email});
        console.log(user, 'from db');  
        if(!user) throw new Error(`User with ${email} does not exist`);
        if(user.password !== password) throw new Error('Invalid Password');

        //Token
        const Token=await generateTokenForUser(user._id);
        console.log(Token,'token')
        return res.cookie('Token',Token).redirect('/');
        // return res.cookie('Token',Token).render('login',{message:'Login success'});

    }catch(error){
        res.render('login',{error});
    }
}

exports.handleUserSignup =async function(req,res){
    const{username, email , password} = req.body;
    try{
       if(!username) throw new Error('username is required');
       if(!email) throw new Error('emailis required');
       if(!password || password.length < 5) throw new Error('password is required and minimum lenght must be 5');
       
       const user=await User.create({username,email,password});
        const Token=await generateTokenForUser(user._id);
        return res.cookie('Token',Token).redirect('/');
    //    return res.render('login', {message:"Signup Success!"});
    }catch(error){
        res.render('signup',{error})
    }
}