var express = require("express");
var app = express();
var router = express.Router();
var api_key = process.env.ENV_API_KEY;
var domain = 'sandbox36438745410943d6b425073ac0cab35c.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});


router.get("/", function(req, res){
  res.render("landing");
});

router.get("/pest-services", function(req, res){
  res.render("pest-services");
});

router.get("/coupons", function(req, res){
  res.render("coupons");
});

router.get("/terms", function(req, res){
  res.render("terms");
});

router.get("/termite-damage", function(req, res){
  res.render("termite-damage");
});

router.get("/contact", function(req, res){
  res.render("contact");
});

router.post("/contact", function(req, res){
  var data = {
    name: req.body.name,
    from: req.body.email,
    phone: req.body.phone,
    subject: req.body.name,
    to: "ogar318267@gmail.com",
    text: req.sanitize(req.body.message)
  };


  mailgun.messages().send(data, function (error, body) {
    if(error){
      console.log(error);
    }
    console.log(body);
    return res.redirect("/");
  });

});




module.exports = router;
