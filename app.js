require('dotenv').config()

var express = require("express");
var app = express();
var flash = require("connect-flash");
var expressSanitizer = require('express-sanitizer');
var bodyParser = require("body-parser");



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static(__dirname + "/public"));
app.use(flash());




//require routes
var indexRoutes = require("./routes/index");


app.use("/", indexRoutes);








app.listen(3000, function(){
  console.log("server running");
});
