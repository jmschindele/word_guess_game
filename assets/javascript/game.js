var startGame;
var alphabet = [];
var wordOptions = ["dog", "cat", "pig", "frog", "moose", "llama", "jelly"];
var word;
var userGuess;
var userScore;
var userLife;
var userInput = document.getElementById("user-input");


// for (i=0, i<randomWord.length, i++); {

// }

function wordGen() {
  
  word = (Math.floor(Math.random() * wordOptions.length));
}

wordGen();

document.getElementById("unsolved-puzzle").textContent = (wordOptions[word])

document.onkeyup = function(event) {
  userGuess = event.key;
  userInput.textContent = userGuess;
  alphabet.push(userGuess);
  document.getElementById("guessed-letters").innerHTML = alphabet.join(" ");
console.log(alphabet);
};





// alphabet.splice(userGuess, userGuess);


// document.getElementById("guessed-letters").innerHTML = alphabet;
// console.log(alphabet);