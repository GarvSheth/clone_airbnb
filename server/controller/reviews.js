const Listing = require("../models/listing");
const Review = require("../models/reviews");
const wrapAsync = require("../utils.js/wrapAsync");

module.exports.addReview = wrapAsync(async(req, res)=> {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${listing._id}`)
});

module.exports.deleteReview = wrapAsync(async(req,res)=>{
    const {id,reviewId}= req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/listings/${id}`);
});