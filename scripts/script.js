// DEPENDENCIES ======================================================================
// VARIABLES =========================================================================
// BUTTONS ===========================================================================
var resetScoresBtn = document.querySelector("#resetScore");
var wins = document.querySelector("#wins");
var losses = document.querySelector("#losses");

// MASTER FUNCTION ===================================================================
// On button press, game needs to initialize
// A 60 second timer will start
// A random word from above array is selected and put into the playing field
// When player presses a letter, playing field will validate if it is present in the randomly generated word
// Once all letters have been selected, a point will be added to the win column
// If all letters have not been selected and the time runs out, a point will be added to the lose column.
// When a player selects "Play again" another word will generate and game will run again
// Reset Scores Button

resetScoresBtn.addEventListener("click", function() {
    console.log("reset scores clicked");
    wins.innerHTML = "0";
    losses.innerHTML = "0";
});
// SECONARY FUNCTIONS ================================================================
// STORAGE ===========================================================================

var timerText = document.getElementById("seconds");

var counter = 60;

timerText.textContent = counter;

var counterInterval = setInterval(function () {
  counter--;
  timerText.textContent = counter;
  if (counter === 0) {
    clearInterval(counterInterval);
    console.log("TIMES UP");
  }
}, 1000);
