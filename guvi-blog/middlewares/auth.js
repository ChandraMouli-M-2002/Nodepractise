const{validateToken} =require('../utils/auth')

exports. CheckForToken=function(req,res,next){
    const token=req.cookies['Token'];
    if(!token) return next();

    try{
       const userPayload=validateToken(token);
       //creating a new variable in the request object user 
       req.user=userPayload;
       next();
    }catch(error){
         next();
    }
}