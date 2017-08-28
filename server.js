// required npm packages
var express = require('express');
var exphbs = require("express-handlebars");
var method = require('method-override');
var bodyParser = require('body-parser');
var methodOverride = require("method-override");
var connection = require('./config/connection');

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// set handlebars as the engine, main as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(methodOverride("_method"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

app.get("/", function(req, res) {
  connection.query("SELECT * FROM burgers;", function(err, data) {
    if (err) throw err;

    res.render("index", { burgers: data });
  })
});

app.post("/", function(req, res) {

});

app.put("/", function(req, res) {

});

app.delete("/", function(req, res) {

});

app.listen(port);