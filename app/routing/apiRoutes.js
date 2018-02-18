var friendData = require("../data/friends");

module.exports = function(app) {

	app.get("/api/friends", function (req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function (req, res) {
		// console.log("req", req);

		var data = req.body;

		var userScores = data.scores;

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

		// finds the min difference in the array of differences
		// and returns the index of the best match
		bestFriendIndex = -1; 
		bestFriendIndex = diffArray.indexOf(Math.min(...diffArray));

		bestFriend = friendData[bestFriendIndex];
		data.bestFriendName = bestFriend.friendName;
		data.bestFriendPhotoLink = bestFriend.friendPhotoLink;

		// $(".modal-content").append("helloooooooooooooooooooooooooooo");
		// $(".jumbotron").append("helloooooooooooooooooooooooooooo");

		// var modal = $(".modal");
		// var modalContent = $(".modal-content");
		// var submitButton = $(".submit");
		// var modalClose = $(".modal-close");

		// submitButton.on("click", function(event) {
		// 	event.preventDefault();

		// 	modalContent.append("Your best match is: " + bestFriend.friendName);
		// 	modalContent.append("<img src='" + bestFriend.FriendPhotoLink + "'");

		// 	modal.style.display = "block";
		// });

		// modalClose.on("click", function(event) {
		// 	event.preventDefault();
		// 	modal.style.display	= "none";
		// });


		// adds current user to the database of friends
		friendData.push(data);
		res.json(true);
	});
};