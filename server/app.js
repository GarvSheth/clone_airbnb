const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path =require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils.js/wrapAsync");
const ExpressError = require("./utils.js/ExpressError");
const {listingSchema, reviewSchema}=require("./schema");
const Review = require("./models/reviews");
const listing = require("./models/listing");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.listen(8080, () => {
    console.log("server is activated on port 8080");
})

const validateListing =(req, res, next) => {
    let {error, value}=listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }else{
        next();
    }
}

const validateReview =(req,res, next) => {
    let {error, value}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }else{
        next();
    }
}

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

//Index Route
app.get("/listings", async (req, res) => {
    const places = await Listing.find({});
    res.render("./listings/main.ejs",{places});
})
// app.get("/listings", async (req,res) => {
//     // Listing.find({}).then((res) => {
//     //     console.log(res);
//     // })
//     const places = await Listing.find({});
//     res.render("/index.ejs", {places});
// })

//New Route
app.get("/listings/new", (req, res) => {
    res.render("./listings/new.ejs");
});

//Show Route
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const detail_place = await Listing.findById(id).populate("reviews");
    res.render("./listings/show.ejs", {detail_place});
}));

//Create Route
app.post("/listings", validateListing,
    wrapAsync(async (req,res) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
        // let listing= req.body;
        // console.log(listing);
    })
);

//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req,res) => {
    let {id} = req.params;
    const edit_place = await Listing.findById(id);
    res.render("./listings/edit.ejs",{edit_place});
}));

//Update
app.put("/listings/:id", validateListing, wrapAsync(async(req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body});
    res.redirect(`/listings/${id}`);
}));

//delete route
app.delete("/listings/:id", wrapAsync(async(req,res) => {
    let {id} = req.params;;
    Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

//Reviews route
//Post route
app.post("/listings/:id/reviews", validateReview, wrapAsync(async(req, res)=> {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`)
}));

//delete review route
app.post("/listings/:id/reviews/:reviewId", wrapAsync(async(req,res)=>{
    const {id,reviewId}= req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
}));

app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found"));
})

app.use((err, req, res, next) => {
    let {statusCode=500, message="something went wrong"}=err;
    res.status(statusCode).send(message);
})