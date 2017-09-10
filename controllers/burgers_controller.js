var express = require("express");

var router = express.Router();

// Import the burger.js model
var burger = require("../models/burger.js");

// list all of the burgers and show in the index page
router.get("/", function (req, res) {
  burger.read(function (data) {
    var brgObject = {
      burgers: data
    };
    res.render("index", brgObject);
  });
});

// add a new burger to the menu
router.post("/", function (req, res) {
  // TO DO: reg exp out any non word or number, can include ! and ?
  if (req.body.burger === ""){
    // TO DO: use Materialize.toast() to display an error message
    console.log("empty burger");
    res.redirect("/");
  } else {
  burger.create(
    req.body.burger, 
    function () {
      res.redirect("/");
    });
  };
});

// update the burger to devoured or available
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