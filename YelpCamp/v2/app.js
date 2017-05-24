var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose")


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
// so you dont have to write ejs on the res.render
app.set("view engine", "ejs")


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create (
//   {
//     name: "Emerson Lopes",
//     image: "http://noguera-pallaresa.com/wp-content/uploads/2016/05/Camping-Noguera-Pallaresa-Zona-Acampada-500x500.jpg"
//
//   }, function(err, campground){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMP");
//       console.log(campground);
//     }
//   }
// );


app.get("/", function(req, res){
  res.render("landing");
});

app.get("/campgrounds", function(req, res){
  // Get all the campgrounds from the DB
  Campground.find({}, function(err, allCampgrounds){
    if (err) {
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: allCampgrounds});
    }
  });
});

// different from the app.post("/campgrounds")
app.post("/campgrounds", function(req, res){
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image}
  // create a new campground and sace to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if (err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs");
});

app.listen(3000, function(){
  console.log("The Yelp Camp Server Has Started!");
});
