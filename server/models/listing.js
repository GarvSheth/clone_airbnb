const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const  listingSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-path-through-a-field-of-wildflowers-leading-to-the-ocean-iuaQH6ZADPw",
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("Listing", listingSchema);