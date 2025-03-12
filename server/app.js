const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path =require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils.js/ExpressError");
const listings = require("./routes/listings.js");
const reviews = require("./routes/reviews.js");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.engine('ejs',ejsMate);
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(8080, () => {
    console.log("server is activated on port 8080");
})

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

app.get("/", (req,res) => {
    res.send("This is home page");
})

//All the routes of listings
app.use("/listings", listings);

//Reviews route
app.use("/listings/:id/reviews", reviews);

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong"}=err;
    res.status(statusCode).send(message);
})