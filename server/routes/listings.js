const express = require("express");
const router = express.Router();
const {LoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require('multer');
const {storage} = require('../cloudConfig.js');
const upload = multer({ storage });

//Index Route
router.get("/", listingController.index);

//New Route
router.get("/new", LoggedIn, listingController.newRoute);

//Show Route
router.get("/:id", listingController.show);

//Create Route
router.post("/",LoggedIn, upload.single('listing[image]'),validateListing, listingController.createListing);

//Edit Route
router.get("/:id/edit",LoggedIn,isOwner, listingController.editListing);

//Update
router.put("/:id", LoggedIn,isOwner, validateListing, listingController.updateListing);

//delete route
router.delete("/:id",LoggedIn,isOwner, listingController.deleteListing);

module.exports = router;