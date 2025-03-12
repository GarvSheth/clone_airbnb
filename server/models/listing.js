const mongoose = require("mongoose");
const Review = require("./reviews.js");
const Schema = mongoose.Schema;

const  listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-path-through-a-field-of-wildflowers-leading-to-the-ocean-iuaQH6ZADPw",
        //something different in original check 55 module, lec3 and 7:00
    },
    price: {
        type: Number,
    },
    location: {
        type: String
    },
    country: {
        type: String,
    },
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in :listing.reviews}})
    }
})

module.exports = mongoose.model("Listing", listingSchema);