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

// update the burger to devoured or available
router.put("/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log(req.body.devoured);

  if (req.body.devoured = true){
    burger.update({
      devoured: req.body.devoured
    }, condition, function(){
      res.redirect("/");
    });
  } else {
    burger.update({
      devoured: {devoured: false}
    }, condition, function(){
      res.redirect("/");
    });
  }
});

// Export routes for server.js
module.exports = router;