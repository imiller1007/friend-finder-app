var friendData = require("../data/friends");
var path = require("path");

module.exports = function(app) {

app.get("/api/users", function(req, res) {
    res.json(friendData);
    });


app.post("/api/users", function(req, res) {

    //pushing the new user in the users array
    var newUser = req.body;
    

    console.log(newUser.scores);

    //putting the user's in a variable
    var newScore = newUser.scores


    var userMatch = "";
    var matchPic = "";
    var totalDifference = 50;

    for (var i = 0; i < friendData.length; i++) {
        var difference = 0;

        for (var x = 0; x < newScore.length; x++) {
            difference += Math.abs(friendData[i].scores[x] - newScore[x]);
        }

        if (difference < totalDifference) {
          

            totalDifference = difference;
            userMatch = friendData[i].name;
            matchPic = friendData[i].photo;
           
        }
    }

        friendData.push(newUser);

        res.json({status: 'OK', name: userMatch, image: matchPic});

  })

}

