
 var express = require("express");
 var bodyParser = require("body-parser");
 
 
 // Creates an express server
 var app = express();
 
 // Sets an initial port. We"ll use this later in our listener
 var PORT = process.env.PORT || 3000;
 
 //get request/ response
 app.get("/", function(req,res){
    console.log(res)
    res.send("This server works")
 })
 
 
 // LISTENER
 app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
 });