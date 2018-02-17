var path = require("path");
var express = require("express");

module.exports = function(app) {

	// app.get(express.static(path.join(__dirname, "../public/style.css")));

	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.use('/', express.static(path.join(__dirname, "../public/")));
};