const express = require("express");
const router = express.Router();
const User = require("../models/Users.js");
const wrapAsync = require("../utils.js/wrapAsync");
const passport = require("passport");
const { redirectURL } = require("../middleware.js");

router.get("/signup", (req,res) => {
    res.render("users/signup.ejs");
})

router.post("/signup", wrapAsync(async (req, res) => {
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
}));

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
})

router.post("/login", redirectURL, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}),
    async(req, res) => {
        req.flash("success", "Login successful!");
        if(res.locals.redirectUrl){
            res.redirect(res.locals.redirectUrl);
        }else{
            res.redirect("/listings");
        }
})

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","You are successfully logged out!");
        res.redirect("/listings");
    })
})

module.exports = router;