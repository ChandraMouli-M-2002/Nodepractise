const { validateToken } = require("../utils/auth");

exports.CheckForToken = function (req, res, next) {
  const token = req.cookies["Token"];
  if (!token) return next();

  try {
    const userPayload = validateToken(token);
    //creating a new variable in the request object user
    req.user = userPayload;
    next();
  } catch (error) {
    next();
  }
};

exports.onlyGrantAccessTo = function (role) {
  return function (req, res, next) {
    const token = req.cookies["Token"];
    if (!token) return res.redirect("/");

    try {
      const userPayload = validateToken(token);
      //creating a new variable in the request object user
      if (userPayload.role === role) {
        req.user = userPayload;
        next();
      }else{
        res.redirect('/');
      }
    } catch (error) {
      next();
    }
  };
};

exports.ensureAuthticated=function (req,res,next){
    if(!req.user) return res.redirect('/login');
    return next();
}
