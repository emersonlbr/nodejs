// basic set up the the app
var express = require("express");
var app = express();
var request = require("request");
// setting the app to the return a html with ejs
app.set("view engine", "ejs");

app.get("/", function(req, res){
  // rendering the search.ejs on the views folder
  res.render("search");
});

// this is the route
app.get("/results", function(req, res){
    // getting the data from the user in the search
    var query = req.query.search
    // sending the info to the search api
    var url = "http://omdbapi.com/?s=" + query;
    console.log(query);

    request(url, function(error, response, body){
      if(!error && response.statusCode == 200){
        // converting the api (wich at first is a string into a JSON element)
        var data = JSON.parse(body);
        // passing the the data to the template
        // it will have the same name
        // rendering the results.ejs on the views folder
        res.render("results", {data: data});
      };
    });
});

app.get("/emerson", function(req, res){
  res.render("emerson")
})


// 300 is the port the code will be run
app.listen(3000, function(){
  console.log("Server has started");
});
