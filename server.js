//NPM packages required 
var express = require("express");
path = require("path");

// Configures App
var app = express();
var PORT = process.env.PORT || 8085;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
  
});
