// create an array of words for the computer to guess
var targetWord = [
  "apple",
  "banana",
  "orange",
  "grape",
  "strawberry",
  "cranberry",
  "papaya",
  "pomegranate",
  "apricot",
  "blueberry",
  "cantaloupe",
  "mango",
  "cherry",
  "coconut",
  "lime",
  "grapefruit",
  "guava",
  "honeydew",
  "kiwi",
  "kumquat",
  "peach",
  "plum",
  "raspberry"
];
// define other variables
var start;
var wordIndex = 0;
var computerChoice = "";
var letterBlanks = "";
var blankHolder = [];
var userGuess;
var keyPress;

var allBlanks = [];
var wrongGuess = [];
var wins;
var lives;

//Set lives to 6 and add to page
lives = 6;
document.getElementById("lives").innerHTML = lives;

//Set wins to 0 on load up

wins = 0;
document.getElementById("wins").innerHTML = wins;

// Capture starting function to allow multiple plays without reload

// computer guesses a word
function wordGen() {
  wordIndex = Math.floor(Math.random() * targetWord.length);
}

wordGen();
computerChoice = targetWord[wordIndex];

// computer converts word into underscores and displays on webpage

var wordBlanks = document.createElement("span");

for (var i = 0; i < computerChoice.length; i++) {
  allBlanks.push("_");
  wordBlanks.textContent = allBlanks.join(" ");
  document.getElementById("unsolved-puzzle").appendChild(wordBlanks);
}

// user inputs a key to guess word
document.onkeydown = function(e) {
  keyPress = event.key;

  //remove special characters from inputs
  if (event.keyCode >= 65 && event.keyCode <= 90) {
    //Add condition that prompts user of repeated keys
    if (wrongGuess.indexOf(keyPress) > -1) {
      alert("You've already pressed that letter!");
    }

    //Add a for loop to replace blanks with characters based on position
    for (var i = 0; i < computerChoice.length; i++) {
      if (computerChoice.charAt(i) == keyPress) {
        allBlanks[i] = keyPress;
        wordBlanks.textContent = allBlanks.join(" ");
      } else if (
        /* Add condition that finds unused wrong keypresses and displays them for user  
and takes away a life */
        wrongGuess.indexOf(keyPress) == -1 &&
        computerChoice.indexOf(keyPress) == -1
      ) {
        wrongGuess.push(keyPress);
        lives--;
        document.getElementById("lives").innerHTML = lives;
        wrongGuess.sort();
        document.getElementById("guessed-letters").innerHTML = wrongGuess.join(
          " "
        );
      }
    }
  }
};

// place win and lose conditions on Key Up for timing consistency
document.onkeyup = function(e) {
  //Add win coition
  if (computerChoice == allBlanks.join("").toString()) {
    alert("You Win!");
    wins++;
    document.getElementById("wins").innerHTML = wins;
    //Choose new word
    lives = 6;
    document.getElementById("lives").innerHTML = lives;
    wordGen();
    computerChoice = targetWord[wordIndex];
    //Reset Stats

    allBlanks = [];

    wrongGuess = [];

    document.getElementById("guessed-letters").innerHTML = wrongGuess;
    // computer converts word into underscores and displays on webpage
    for (var i = 0; i < computerChoice.length; i++) {
      allBlanks.push("_");
      wordBlanks.textContent = allBlanks.join(" ");
      document.getElementById("unsolved-puzzle").appendChild(wordBlanks);
    }
  }

  //Add gameover condition
  if (lives === 0) {
    alert("You Lose!");
    location.reload();
  }
};
