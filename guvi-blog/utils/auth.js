const jwt=require('jsonwebtoken')
const User=require('../models/user');
const JWT_SECRET='$uperm@n';

async function generateTokenForUser(id){
   const user = await User.findById(id);
   const payload={
    _id:user._id,
    email:user.email,
    userName:user.username,
   };

   const token=jwt.sign(payload, JWT_SECRET);
   return token;
}


//it will verify the token and return the payload
function validateToken(token){
    return jwt.verify(token,JWT_SECRET)
}

module.exports={
    generateTokenForUser,
    validateToken
}