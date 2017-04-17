var express = require("express");
var app = express();
// "/" => "Hi There!"

//routs oders matter
app.get("/", function(req, res) {
  res.send("hi there");
});
// "/bye" => "Goodbye"
app.get("/bye", function(req, res) {
  res.send("Goodbye!")
});
// "/dog" => "MEOW"
app.get("/dog", function(req, res) {
  res.send("MEOW");
  console.log("SOMEONE MADE A REQUEST TO DOGS");
});

app.get("/r/:subredditName", function(req, res) {
  res.send("Welcome to a subreddit");

});

app.get("/r/:subredditName/comments/:id/:tittle/", function(req,res){
  res.send("WELCOME TO THE COMMENTS PAGE!");
});

//dont put this in the begging
app.get("*", function(req, res) {
  res.send("404 error not found");

});

// tell Express to listen for requests (start server)
app.listen(3000, process.env.IP, function() {
  console.log("Server has started");
});
