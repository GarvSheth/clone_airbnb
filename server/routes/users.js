const express = require("express");
const router = express.Router();
const passport = require("passport");
const { redirectURL } = require("../middleware.js");
const userController = require("../controller/users.js");

router.get("/signup", userController.getSignupPg);

router.post("/signup", userController.userInfo);

router.get("/login", userController.getLoginPg);

router.post("/login", redirectURL, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}),
    userController.userLogin);

router.get("/logout", userController.getLogoutPg);

module.exports = router;