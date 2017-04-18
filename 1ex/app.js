var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.send("Hi there, welcome to my assignment!")
});

// app.get("/speak/pig", function(req, res){
//   res.send("The pig says 'Oink'");
// });
// app.get("/speak/cow", function(req,res){
//   res.send("The cow says 'Moo'");
// });
// app.get("/speak/dog", function(req, res){
//   res.send("The dog says 'Woof Woof'");
// });

app.get("/speak/:animal", function(req, res){
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof",
    cat: "I have you human",
    goldfish: "..."
  };
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];
  res.send("The " + animal + " says " + sound);
});

app.get("/repeat/:message/:times", function(req, res){
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";

  for (var i = 0; i < times; i++) {
      result += message + " ";
  };

  res.send(result);

});


app.get("*", function(req, res) {
  res.send("404 error not found");

});

app.listen(3000, function(){
  console.log("Server working!");
});
