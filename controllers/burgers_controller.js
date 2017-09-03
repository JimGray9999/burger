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
  burger.create(
    req.body.burger, 
    function () {
      res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;
  
  burger.update({
    devoured: req.body.devoured
  }, condition, function(){
    res.redirect("/");
  });
});

// Export routes for server.js
module.exports = router;