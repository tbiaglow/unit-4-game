var crystal = [];

// assign value to each crystal
function assignCrystalValues(crystal) {
    for (i = 0; i < 4; i++) {
        rand = Math.floor(Math.random() * 12) + 1;
        crystal[i] = rand;
    }
    return crystal
}

// Generates random number of points (win condition) between 19 and 120
function pointsRequired() {
    points = Math.floor(Math.random() * 120) + 19;
    return points
}

// function that initializes score, gives point values to crystals, and total points required
function newRound() {
    var round = {
        score: 0,
        crystals: assignCrystalValues(crystal),
        points: pointsRequired()
    }
    return round
}