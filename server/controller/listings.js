const Listing = require("../models/listing");
const wrapAsync = require("../utils.js/wrapAsync");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
    const places = await Listing.find({});
    res.render("./listings/main.ejs",{places});
}

module.exports.newRoute = (req, res) => {
    res.render("./listings/new.ejs");
}

module.exports.show = wrapAsync(async (req, res) => {
    let {id} = req.params;
    const detail_place = await Listing.findById(id).populate({path:"reviews", populate:{path:"author"}}).populate("owner");
    if(!detail_place){
        req.flash("error","Unable to find the listing");
        res.redirect("/listings");
    }
    res.render("./listings/show.ejs", {detail_place});
})

module.exports.createListing = wrapAsync(async (req,res,next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    let response = await geocodingClient.forwardGeocode({
        query: newListing.location,
        limit: 1
    })
    .send()
    newListing.geometry = response.body.features[0].geometry;
    newListing.owner= req.user._id;
    newListing.image= {url, filename};
    await newListing.save();
    req.flash("success","New listing Added!");
    res.redirect("/listings");
});

module.exports.editListing = wrapAsync(async (req,res) => {
    let {id} = req.params;
    const edit_place = await Listing.findById(id);
    if(!edit_place){
        req.flash("error","Unable to find the listing");
        res.redirect("/listings");
    }
    res.render("./listings/edit.ejs",{edit_place});
});

module.exports.updateListing = wrapAsync(async(req,res) =>{
    let {id} = req.params;
    const listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});
    // updated_listing.image = {url, filename};

    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image={url, filename};
        listing.save();
    }
    const title=req.body.listing.title;
    req.flash("success",`${title} is updated`);
    res.redirect(`/listings/${id}`);
});

module.exports.deleteListing = wrapAsync(async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted Successfully!");
    res.redirect("/listings");
});


