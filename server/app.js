const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path =require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");

app.set("view engine","ejs");
app.set("views",path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

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
app.get("/listings", async (req, res) => {
    const places = await Listing.find({});
    res.render("./listings/main.ejs",{places});
})
// app.get("/listings", async (req,res) => {
//     // Listing.find({}).then((res) => {
//     //     console.log(res);
//     // })
//     const places = await Listing.find({});
//     res.render("/index.ejs", {places});
// })

//New Route
app.get("/listings/new",(req, res) => {
    res.render("./listings/new.ejs");
})

//Show Route
app.get("/listings/:id", async (req, res) => {
    let {id} = req.params;
    const detail_place = await Listing.findById(id);
    res.render("./listings/show.ejs", {detail_place});
})

//Create Route
app.post("/listings", async (req,res) => {
    // let listing= req.body;
    // console.log(listing);
    res.send("Not Yet Completed")
})

//Edit Route
app.get("/listings/:id/edit", async (req,res) => {
    let {id} = req.params;
    const edit_place = await Listing.findById(id);
    res.render("./listings/edit.ejs",{edit_place});
})

//Update
app.put("/listings/:id", async(req,res) =>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body});
    res.redirect(`/listings/${id}`);
})

//delete route
app.delete("/listings/:id", async(req,res) => {
    let {id} = req.params;;
    Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})
