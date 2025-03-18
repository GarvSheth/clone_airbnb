const express = require("express");
const router = express.Router({mergeParams: true});
const {validateReview, LoggedIn, isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controller/reviews.js");

//Post route
router.post("/",LoggedIn,validateReview, reviewController.addReview);

//delete review route
router.delete("/:reviewId",LoggedIn, isReviewAuthor, reviewController.deleteReview);

module.exports = router;