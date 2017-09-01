var express = require("express");

var router = express.Router();

// Import the burger.js model
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.read(function (data) {
    var brgObject = {
      burgers: data
    };
    res.render("index", brgObject);
  });
});

router.post("/", function (req, res) {
  console.log(req.body.burger);
  burger.create(
    req.body.burger, 
    function () {
      res.redirect("/");
    });
});

// router.put();

// router.delete();

// Export routes for server.js
module.exports = router;