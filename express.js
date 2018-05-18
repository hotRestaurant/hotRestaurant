//import { dirname } from "path";
var path = require("path")

 var express = require("express");
 var bodyParser = require("body-parser");
 
 
 // Creates an express server
 var app = express();
 
 // Sets an initial port. We"ll use this later in our listener
 var PORT = process.env.PORT || 3000;

//makes the whole app use body parser and convert to JSON 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


 
 //get request/ response
 app.get("/", function(req,res){
    console.log(res)
    res.send("This server works")
 })

 app.get("/tables", function(req,res){
     res.sendFile(path.join(__dirname + "/tables.html"))
     console.log(path)
 })
 
 // LISTENER
 app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
 });