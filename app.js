require('dotenv').config()

var express = require("express");
var app = express();
var session = require("express-session");
var flash = require("connect-flash");
var expressSanitizer = require('express-sanitizer');
var bodyParser = require("body-parser");

app.use(function (req, res, next) {
    res.locals.pageTitle = "Above All Pest Control";
    next();
});


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(express.static(__dirname + "/public"));
app.use(session({
  secret: "above",
  saveUninitialized: true,
  resave: true
}));
app.use(flash());


//require routes
var indexRoutes = require("./routes/index");



app.use("/", indexRoutes);









app.listen(process.env.PORT || 3000, function(){
  console.log("server running");
});
