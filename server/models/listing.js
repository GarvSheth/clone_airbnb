const mongoose = require("mongoose");
const Review = require("./reviews.js");
const { required } = require("joi");
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
        set: (v)=> v && v.trim()==="" ? "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" : v,
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
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({_id: {$in :listing.reviews}})
    }
})

module.exports = mongoose.model("Listing", listingSchema);