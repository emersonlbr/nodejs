var express = require("express");
var app = express();

// serve the contents in the public directory
// the css files and javascript
app.use(express.static("public"));
// you dont have to use "home.ejs", only home
app.set("view engine", "ejs");

app.get("/", function(req, res){
  //gettinf the page
  res.render("home");
});

app.get("/love/:thing", function(req, res){
  var thing = req.params.thing;
  res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
  var posts = [
    {title: "Post 1", author: "Susy"},
    {title: "Mr. Robot is awesome", author: "Emerson"},
    {title: "O dia que descobri que nao era da zueira", author: "Nao Ouvo"},
  ];
  res.render("posts", {posts: posts});

});

app.listen(3000, function(){
  console.log("server running");
});
