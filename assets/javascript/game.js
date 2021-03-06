var crystals = [];
points = 0;

// assign value to each crystal
function assignCrystalValues(crystals) {
    for (i = 0; i < 4; i++) {
        crystals[i]= {
            name: "crystal" + "_" + (i + 1).toString(),
            value: Math.floor(Math.random() * 12) + 1
        }

    }
    return crystals
}

// Generates random number of points (win condition) between 19 and 120
function pointsRequired(points) {
    var points = Math.floor(Math.random() * 120) + 19;
    return points
}

// function that initializes score, gives point values to crystals, and total points required
function newRound() {
    var round = {
        score: 0,
        crystals: assignCrystalValues(crystals),
        points: pointsRequired(points)
    }
    return round
}

// function to handle player guess
function playerGuess(guess, score) {
    for (i = 0; i < 4; i++) {
        if (guess === myGame.round.crystals[i]) {
            myGame.round.score += myGame.round.crystals[i].value;
        }
    $("#score").html("Score: " + myGame.round.score)
    }
    if (hasWon(myGame.round.score, myGame.round.points)) {
        myGame.wins += 1;
        myGame = setupGame(myGame.wins, myGame.losses);
        $("#score").html("Score: " + myGame.round.score)
        $("#wins").html("Wins: " + myGame.wins)
        $("#points").html("Points to Win: " + myGame.round.points)
    }
    else if (hasLost(myGame.round.score, myGame.round.points)) {
        myGame.losses += 1;
        myGame = setupGame(myGame.wins, myGame.losses);
        $("#score").html("Score: " + myGame.round.score)
        $("#losses").html("Losses: " + myGame.losses)
        $("#points").html("Points to Win: " + myGame.round.points)
    }
}

function hasWon(score, points) {
    if (score === points) {
        return true
    }
}

function hasLost(score, points) {
    if (score > points) {
        return true
    }
}

function setupGame(wins, losses) {
    var game = {
        wins: wins,
        losses: losses,
        round: newRound()
    }
    return game
}

var myGame = setupGame(0, 0);