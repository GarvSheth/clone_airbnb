const mongoose = require("mongoose");
const reviews = require("./reviews");
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
    reviews: {
        type: Schema.Types.ObjectId,
        ref: 'Review',
    }
});

module.exports = mongoose.model("Listing", listingSchema);