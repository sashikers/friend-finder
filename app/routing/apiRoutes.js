var friendData = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function (req, res) {
		var data =  req.body;

		var scores = data.scores;
		console.log("scores", scores);


		friendData.push(req.body);
		console.log("data", data);
		res.json(true);

		// var answerArray = [];
		// for (j = 0; j < req.body.scores[])

		// console.log("req.body.scores", req.body([scores[]]));

		// var closestFriend = '';

		// console.log("friendData", friendData);
		// for (i = 0; i < friendData.length; i++) {
		// 	// console.log("friendData[i]", friendData[i].friendName);
		// 	var scoreArray  = [];
		// }
		
	});
};