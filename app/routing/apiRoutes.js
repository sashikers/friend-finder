var friendData = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function (req, res) {
		var data =  req.body;

		var userScores = data.scores;
		console.log("userScores", userScores);

		// array to hold all score differences
		var diffArray = [];

		// iterates through all existing possible friend
		for (var i = 0; i < friendData.length; i++) {

			var friendScores = friendData[i].scores;
			var totalDiff = 0;

			// iterates through all scores, finds the difference from user's scores,
			// and adds them to the totalDiff
			for (var j = 0; j < 10; j++) {
				var questionDiff = 0;
				questionDiff = Math.abs(friendScores[j] - userScores[j]);
				totalDiff = totalDiff + questionDiff;
			}

			// pushes the combination of differences to the differences array
			diffArray.push(totalDiff);
		}

		console.log("diffArray",diffArray);
		bestFriendIndex = -1; 
		bestFriendIndex = diffArray.indexOf(Math.min(...diffArray));

		console.log("bestFriendIndex",bestFriendIndex);


		friendData.push(req.body);
		console.log("data", data);
		console.log("friendData", friendData);
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