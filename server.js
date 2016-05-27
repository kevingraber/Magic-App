// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');
var mongoose = require('mongoose');


var app = express();
var PORT = process.env.PORT ||3000;

// Sets the connection to MongoDB
mongoose.connect("mongodb://localhost/PlaygroupDB");


// Sets up the Express app to handle data parsing.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Use morgan to log requests to the console.
app.use(morgan('dev'));

// Allows the serving of static content such as CSS.
app.use(express.static(__dirname + '/app/public'));


// Routes
// =============================================================
require("./app/routes/api-routes.js")(app)
require("./app/routes/html-routes.js")(app)


// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})