path = require ("path");

var friends = require("../data/friends.js");

module.exports = function (app){
    app.get(friends, function(req,res){
        res.json(friends);
    })

    app.post('/api/friends', function(req,res){
var userInput = req.body;
var userResponses = userInput.scores;
var matchName = "";
var matchPhoto = "";
var bestMatch = {Name:"", Photo: "", Score: ""};
var match = totalDifference;
    
    for (var i=0; i < friends.length; i++ ){
        var currentFriend = friends[i];
        var totalDifference = "";
        console.log(currentFriend)

        for (var j=0; j < userResponses.length;j++){
            var userScore = userResponses[j];
            var difference = math.abs(parseInt(userResponses)-parseInt(userInput.scores));
        };

        if(difference <= bestMatch.Score){
         bestMatch.Name = matchName;
         bestMatch.Photo = matchPhoto;
        };

    }

    friends.push(userInput);
        res.json(bestMatch);
    });

};