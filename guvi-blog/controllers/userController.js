const User= require('../models/user');

exports.handleUserLogin = function(req,res){
    return res.render('login')
}

exports.handleUserSignup =async function(req,res){
    const{username, email , password} = req.body;
    try{
       if(!username) throw new Error('username is required');
       if(!email) throw new Error('emailis required');
       if(!password || password.length < 5) throw new Error('password is required and minimum lenght must be 5');
       
       await User.create({username,email,password});
       return res.render('login', {message:"Signup Success!"});
    }catch(error){
        res.render('signup',{error})
    }
}