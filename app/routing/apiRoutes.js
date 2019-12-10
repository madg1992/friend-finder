var friends = require('../data/friends');

// route that displays all friends
// localhost:8080/api/friends
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })
    app.post('/api/friends', function (req, res) {

        console.log(req.body)

        var friendMatch = {
            name: "",
            photo: "",
            scores: 1000
        };

        // use req.body form body-parser middleware
        var userData = req.body
        var userScores = userData.scores;

        console.log(userScores);

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {
            console.log(friends[i]);
            totalDifference = 0;

            for (var k = 0; j < friends[i].scores[k]; k++) {
                totalDifference += Math.abs(parseInt(userScores[k]) - parseInt(friends[i].scores[k]));
                if (totalDifference <= friendMatch.scores) {
                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.scores = totalDifference;
                }
            }
        }

        friends.push(userData);

        res.json(friendMatch);
    });

}