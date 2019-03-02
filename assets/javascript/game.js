// create an array of words for the computer to guess
var targetWord = ["apple", "banana", "orange", "grape", "strawberry"];
// define other variables
var start;
var wordIndex = 0;
var computerChoice = "";
var letterBlanks = "";
var blankHolder = [];
var userGuess;
var keyPress;
var userInput = document.getElementById("user-input");
var allBlanks = [];
var wrongGuess = [];
var wins = 0;

//Set lives to 6 and add to page
var lives = 6;
document.getElementById("lives").innerHTML = lives;
// computer guesses a word

function wordGen() {
  wordIndex = Math.floor(Math.random() * targetWord.length);
}
wordGen();
computerChoice = targetWord[wordIndex];

// computer converts word into underscores and displays on wedpage

var wordBlanks = document.createElement("span");

for (var i = 0; i < computerChoice.length; i++) {
  allBlanks.push("_");
  wordBlanks.textContent = allBlanks.join(" ");
  document.getElementById("unsolved-puzzle").appendChild(wordBlanks);
}

// user inputs a key to guess word
document.onkeypress = function(e) {
  keyPress = event.key;

 //Add condition that prompts user of repeated keys 
  if (wrongGuess.indexOf(keyPress) > -1) {
    alert("You've already pressed that letter!");
  }

//Add win condition
  if (computerChoice == allBlanks.join("").toString()) {
    alert("You Win!");
    location.reload();
    win++;
  }
//Add gameover condition
  if (lives === 0) {
    alert("You Lose!");
    location.reload();
  }
//Add a for loop to replace blanks with characters based on position
  for (var i = 0; i < computerChoice.length; i++) {
    if (computerChoice.charAt(i) == keyPress) {
      allBlanks[i] = keyPress;
      wordBlanks.textContent = allBlanks.join(" ");
    } 
/* Add condition that finds unused wrong keypresses and displays them for user  
and takes away a life */  
    else if (
      wrongGuess.indexOf(keyPress) == -1 &&
      computerChoice.indexOf(keyPress) == -1
    ) {
      wrongGuess.push(keyPress);
      lives--;
      document.getElementById("lives").innerHTML = lives;
      wrongGuess.sort();
      document.getElementById("guessed-letters").innerHTML = wrongGuess.join(" ");
    }
  }
};

