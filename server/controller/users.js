const User = require("../models/Users.js");
const wrapAsync = require("../utils.js/wrapAsync");

module.exports.userInfo = wrapAsync(async (req, res) => {
    try{
        let {username, email, password} = req.body;
        const newUser = new User({username, email});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err)=> {
            if(err){
                next(err);
            }
            req.flash("success", "Login successful!");
            res.redirect("/listings");
        })
    } catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
})

module.exports.getSignupPg = (req,res) => {
    res.render("users/signup.ejs");
}

module.exports.userLogin =async(req, res) => {
    req.flash("success", "Login successful!");
    if(res.locals.redirectUrl){
        res.redirect(res.locals.redirectUrl);
    }else{
        res.redirect("/listings");
    }
}

module.exports.getLoginPg=(req, res) => {
    res.render("users/login.ejs");
}

module.exports.getLogoutPg = (req, res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","You are successfully logged out!");
        res.redirect("/listings");
    })
}