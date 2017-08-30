// required npm packages
var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride = require("method-override");

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// set handlebars as the engine, main as the default layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(port);