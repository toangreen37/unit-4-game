// GLOBAL VARIABLES
var crystal = {
    green:
        {
            name: "Green",
            value: 0
        },
    black:
        {
            name: "Black",
            value: 0
        },
    yellow:
        {
            name: "Yellow",
            value: 0
        },
    red:
        {
            name: "Red",
            value: 0
        },
}

var yourScore = 0;
var targetScore = 0;

var wins = 0;
var loss = 0;

// Functions
var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var startGame = function () {
    yourScore = 0;

    targetScore = getRandom(19, 120);

    crystal.green.value = getRandom(1, 12);
    crystal.black.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);

    $("#yourScore1").html(yourScore);
    $("#targetScore1").html(targetScore);
}

var addValues = function (crystal) {

    yourScore = yourScore + crystal.value;

    $("#yourScore1").html(yourScore);

    checkWin();
}

var checkWin = function () {
    if (yourScore > targetScore) {
        alert("Sorry you lost!");
        loss++;

        $("#losses1").html(loss);

        startGame();
    }

    else if (yourScore == targetScore) {
        alert("Congratulations, you won!");
        wins++;

        $("#wins1").html(wins);

        startGame();
    }
}

// Main
startGame()

$("#green").click(function () {
    addValues(crystal.green);
});

$("#black").click(function () {
    addValues(crystal.black);
});

$("#yellow").click(function () {
    addValues(crystal.yellow);
});

$("#red").click(function () {
    addValues(crystal.red);
});