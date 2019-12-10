var friends = require('../data/friends');

// route that displays all friends
// localhost:8080/api/friends
module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friends)
    })
    app.post('/api/friends', function (req, res) {
        console.log(req.body)
        res.json(friends)
    })

};