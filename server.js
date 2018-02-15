var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

console.log(PORT);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// app.use(express.static(path.join(__dirname, "/app/public/style.css")));

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);


});