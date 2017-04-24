// var request = require('request');
// request('http://google.com', function(error, response, body){
//   if(!error && response.statusCode == 200){
//     console.log(body); //Show the html for the Google homepage
//   };
// });

var request = require('request');
request('http://www.swwewdcdc.com', function(error, response, body){
  if (error) {
    console.log("Something went wrong");
    console.log(error);
  } else {
    if (response.statusCode == 200) {
      console.log(body);
    }
  }
})
