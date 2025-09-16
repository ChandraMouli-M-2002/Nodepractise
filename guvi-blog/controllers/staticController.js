exports.renderHomePage=function(req,res){
    // console.log(req.user,'dkkkkkkkkkkkkkk')
    return res.render('home',{
        user:req.user,
    });
}

exports.renderLoginPage=function(req,res){
    if(req.user) {
        console.log(req.user,'xxxxxxxxxx');
        return res.redirect('/');
    }
    return res.render('login');
}

exports.renderSignupPage=function(req,res){ 
    if(req.user) return res.redirect('/');
    return res.render('signup');
}