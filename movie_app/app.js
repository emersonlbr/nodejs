// basic set up the the app
var express = require("express");
var app = express();
var request = require("request");
// setting the app to the return a html with ejs
app.set("view engine", "ejs");



// this is the route
app.get("/results", function(req, res){
    request("http://omdbapi.com/?s=iowa", function(error, response, body){
      if(!error && response.statusCode == 200){
        // converting the api (wich at first is a string into a JSON element)
        var data = JSON.parse(body);
        // passing the the data to the template
        // it will have the same name
        res.render("results", {data: data});

      };
    });
});


// 300 is the port the code will be run
app.listen(3000, function(){
  console.log("Server has started");
});
