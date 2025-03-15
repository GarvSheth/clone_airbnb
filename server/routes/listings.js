const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils.js/wrapAsync");
const ExpressError = require("../utils.js/ExpressError");
const {listingSchema}=require("../schema.js");
const listing = require("../models/listing.js");
const {LoggedIn} = require("../middleware.js");

const validateListing =(req, res, next) => {
    let { error, value } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.details.map(e => e.message).join(", "));
    } else {
        next();
    }
}

//Index Route
router.get("/", async (req, res) => {
    const places = await Listing.find({});
    res.render("./listings/main.ejs",{places});
})

//New Route
router.get("/new", LoggedIn, (req, res) => {
    res.render("./listings/new.ejs");
});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const detail_place = await Listing.findById(id).populate("reviews").populate("owner");
    if(!detail_place){
        req.flash("error","Unable to find the listing");
        res.redirect("/listings");
    }
    res.render("./listings/show.ejs", {detail_place});
}));

//Create Route
router.post("/",LoggedIn, validateListing,
    wrapAsync(async (req,res,next) => {
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        req.flash("success","New listing Added!");
        res.redirect("/listings");
    })
);

//Edit Route
router.get("/:id/edit",LoggedIn, wrapAsync(async (req,res) => {
    let {id} = req.params;
    const edit_place = await Listing.findById(id);
    if(!edit_place){
        req.flash("error","Unable to find the listing");
        res.redirect("/listings");
    }
    res.render("./listings/edit.ejs",{edit_place});
}));

//Update
router.put("/:id", LoggedIn, validateListing, wrapAsync(async(req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    const title=req.body.listing.title;
    req.flash("success",`${title} is updated`);
    res.redirect(`/listings/${id}`);
}));

//delete route
router.delete("/:id",LoggedIn, wrapAsync(async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted Successfully!");
    res.redirect("/listings");
}));

module.exports = router;