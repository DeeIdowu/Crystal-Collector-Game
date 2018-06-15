//Given random number at start of game
//var RandomNum = [40,36,20,22,13];
//Crystal varNames and values
//var crystalNames = ["diamond", "gemstones","emerald","ruby"];


//Game is won when matching total score to random number

//Game is loss when total score goes above random number

//Refresh game.

//Define variables

var randomScore, roundScore, diamond, gemstone, emerald, ruby, wins, loss, randomNumber;


init()// this resets the score.


// round score
roundScore = 0; //placing html element with js as 0

// scoreboard
wins=0;
loss=0;
//buttons
 
diamond = document.getElementById("diamond");
gemstone = document.getElementById("gemstone");
emerald = document.getElementById("emerald");
ruby = document.getElementById("ruby");


var diamondValue = Math.floor(Math.random()* 10) +1;
diamond.addEventListener("click", function() {
    roundScore += diamondValue;
    document.getElementById("roundscore").textContent = roundScore; 
    if (randomNumber == roundScore) {
        wins += 1;
        document.getElementById("win").textContent= wins;
        init()
    } else if (roundScore>randomNumber) {
        loss += 1;
        document.getElementById("lose").textContent= loss;
        init(randomNumber);

    }

});

var gemstoneValue = Math.floor(Math.random()* 10) +1;
gemstone.addEventListener("click", function() {
    roundScore += diamondValue;
    document.getElementById("roundscore").textContent = roundScore; 
    if (randomNumber == roundScore) {
        wins += 1;
        document.getElementById("win").textContent= wins;
        init()
    } else if (roundScore>randomNumber) {
        loss += 1;
        document.getElementById("lose").textContent= loss;
        init(randomNumber);

    }

});

var emeraldValue = Math.floor(Math.random()* 10) +1;
emerald.addEventListener("click", function() {
    roundScore += diamondValue;
    document.getElementById("roundscore").textContent = roundScore; 
    if (randomNumber == roundScore) {
        wins += 1;
        document.getElementById("win").textContent= wins;
        init()
    } else if (roundScore>randomNumber) {
        loss += 1;
        document.getElementById("lose").textContent= loss;
        init(randomNumber);

    }

});

var rubyValue = Math.floor(Math.random()* 10) +1;
ruby.addEventListener("click", function() {
    roundScore += diamondValue;
    document.getElementById("roundscore").textContent = roundScore; 
    if (randomNumber == roundScore) {
        wins += 1;
        document.getElementById("win").textContent= wins;
        init()
    } else if (roundScore>randomNumber) {
        loss += 1;
        document.getElementById("lose").textContent= loss;
        init(randomNumber);

    }

});

// this is to reset the button values/randomize the random number and reset the roundscore.
function init() {
 numGenerator()
 roundScore = 0;
 document.getElementById("roundscore").textContent = roundScore; //updates the user interace to get 0.
 diamondValue = Math.floor(Math.random()* 10) +1;
 gemstoneValue = Math.floor(Math.random()* 10) +1;
 emeraldValue = Math.floor(Math.random()* 10) +1;
 rubyValue = Math.floor(Math.random()* 10) +1;
 
}
// random number generator
function numGenerator() {
    randomNumber = Math.floor(Math.random()* 50);
    document.getElementById("numbergenerator").textContent = randomNumber;
};