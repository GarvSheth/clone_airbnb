const mongoose = require("mongoose");
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
});

module.exports = mongoose.model("Listing", listingSchema);