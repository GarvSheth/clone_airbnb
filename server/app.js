if(process.env.NODE_ENV!="production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path =require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils.js/ExpressError");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const User = require("./models/Users.js");
const LocalStrategy = require("passport-local");

const listingRouter = require("./routes/listings.js");
const reviewRouter = require("./routes/reviews.js");
const userRouter = require("./routes/users.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.engine('ejs',ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const MONGO_URL = 'mongodb://127.0.0.1:27017/airbnb';

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
    secret: "supersecretcode",
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now()+ 7*24*60*60*1000,
        maxAge: 7*24*60*60*1000,
        httpOnly : true
    }
}

app.get("/", (req,res) => {
    res.send("This is home page");
})

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
// use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next)=> {
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser = req.user;
    next();
})

app.use("/", userRouter);

//All the routes of listings
app.use("/listings", listingRouter);

//Reviews route
app.use("/listings/:id/reviews", reviewRouter);

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong"}=err;
    res.status(statusCode).send(message);
})

app.listen(8080, () => {
    console.log("server is activated on port 8080");
})