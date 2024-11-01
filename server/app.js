const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path =require("path");

app.set("vie engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}));

app.listen(8080, () => {
    console.log("server is activated on port 8080");
})

const MONGO_URL = 'mongodb://127.0.0.1:27017/airbnb';

main()
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.get("/", (req,res) => {
    res.send("This is home page");
})

//Index Route
app.get("/listings", async (req,res) => {
    // Listing.find({}).then((res) => {
    //     console.log(res);
    // })
    const places = await Listing.find({});
    res.render("listings.ejs", {places});
})


//Create Route
app.get("/listings/new",(req, res) => {
    res.render("new.ejs");
})

//Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const detail_place = await Listing.findById(id);
    res.render("show.ejs", {detail_place});
})



