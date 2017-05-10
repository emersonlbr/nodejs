// basic set up of mongoose
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
 // var emerson = new Cat({
 //   name: "Mandy",
 //   age: 19,
 //   temperament: "Beatiful"
 // });
 //
 //
 // emerson.save(function(err, cat){
 //   if(err){
 //     console.log("SOMETHING WENT WRONG");
 //   } else {
 //     console.log("WE JUST SAVED IT TO A DB");
 //     console.log(cat);
 //   }
 // });

 // add and save at the same time
Cat.create({
  name: "Snow White",
  age: 15,
  temperament: "Bland"
}, function(err, cat){
  if (err) {
    console.log(err);
  } else {
    console.log(cat);
  }
});

Cat.find({}, function(err, cats){
  if (err) {
    console.log("OH NO");
    console.log(err);
  } else {
    console.log("ALL THE CATS");
    console.log(cats);
  }

});
