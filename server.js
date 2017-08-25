var express = require('express'); // access the npm express package
var method = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express(); // create an app instance of express.js

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));