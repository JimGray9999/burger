var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.read(function (data) {
    var brgObject = {
      burgers: data
    };
  });
});

router.post("/", function (req, res) {
  burger.create(function (data) {
    ["burgers", "devoured"],
    [req.body.burger, false], 
    function() {
      res.redirect("/");
    };
  });
});

router.put();

router.delete();

// Export routes for server.js
module.exports = router;