var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

// so you dont have to write ejs on the res.render
app.set("view engine", "ejs")

var campgrounds = [
  {name: "Emerson Lopes", image: "http://noguera-pallaresa.com/wp-content/uploads/2016/05/Camping-Noguera-Pallaresa-Zona-Acampada-500x500.jpg"},
  {name: "Rodrigo Henrique", image: "https://s-media-cache-ak0.pinimg.com/736x/04/88/1e/04881ee08e6ba4851362a4d3eb28d166.jpg"},
  {name: "Lucas Lima", image: "http://www.eyyaa.com/wp-content/uploads/2016/06/AGPtek-Outdoor-Sunshade-Basecamp-Shelter-Tripod-Beach-Shelter-Canopy-Fiberglass-Poles-Family-Triangular-Sun-Shade-Camping.jpg"}
];

app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  res.render("campgrounds", {campgrounds: campgrounds});
});

// different from the app.post("/campgrounds")
app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground);
  // redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, function(){
  console.log("The Yelp Camp Server Has Started!");
});
