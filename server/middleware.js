const Listing = require("./models/listing");
const Review= require("./models/reviews");
const ExpressError = require("./utils.js/ExpressError");
const {listingSchema}=require("./schema.js");
const {reviewSchema}=require("./schema");

module.exports.validateListing =(req, res, next) => {
    let { error, value } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressError(400, error.details.map(e => e.message).join(", "));
    } else {
        next();
    }
}

module.exports.validateReview =(req,res, next) => {
    let {error, value}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400, error);
    }else{
        next();
    }
}

module.exports.LoggedIn = (req, res, next) => {
    
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Please, Login to continue!");
        return res.redirect("/login");
    }
    next();
}

module.exports.redirectURL = (req, res, next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async (req, res, next) => {
    let {id} = req.params;
    let detail_place = await Listing.findById(id);
    if(!detail_place.owner.equals(res.locals.currUser._id)){
        req.flash("error", "You are not allowed to access this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req, res, next) => {
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error", "You are not allowed to change this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

