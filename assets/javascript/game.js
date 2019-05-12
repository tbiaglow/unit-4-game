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
function playerGuess(guess) {
    for (i = 0; i < 4; i++) {
        if (guess === crystals[i]) {
            round.score += crystals[i].value;
        }
    }
    return round.score
}

