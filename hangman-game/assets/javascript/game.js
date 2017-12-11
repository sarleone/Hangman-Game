//Create a list of possible computer guesses 
var words = [
  "pineapple", 
  "mango", 
  "papaya", 
  "guava",  
  "lychee", 
  "tamarind",
  "pitaya",
  "cherimoya",
  "soursop",
  "mangosteen"
]

//Loop through the guesses
for (i = 0; i < words.length; i++) { 
  var currentWord = i;

//Game object to hold game variables
  var game = {
    "wins": 0,
    "currentWord": "",
    "dashes": [],
    "wordDashes": function() {
      for (i = 0; i < currentWord.length; i++){
      var dash = currentWord.replace(i, "-");
      dashes.push(dash);
      }
    },
    "guessesLeft": 14, 
    "guesses": [], 
    "guesses": [], 
    "reset": function() {
      this.guessesLeft = 9;
      this.guesses = [];
      this.currentWord = currentWord;
    },
    "render": function() {
      html =
        "<h1> The Tropical Fruit Hangman game</h1>" +
        "<p>Guess a letter to pick your fruit</p>" +
        "<p>Wins: " + game.wins + "</p>" +
        "<p>" game.wordDashes + "</p>" +
        "<p>Guesses Left: " + game.guessesLeft + "</p>" +
        "<p>Your guesses so far: " + " "+ game.guesses + " " + "</p>";
      document.querySelector("#game").innerHTML = html; 
    }
  };
  window.onload = function(event) {game.render(); };

    //fuction create event when user presses keys
    document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    
    //You have 15 guesses to pick what the computer picks
    if (game.guessesLeft === 0) {
      game.losses++;
      reset(game);
    }

    //If the user guesses a letter in the hangman word
    if (currentWord.split("").includes(userGuess)) {
      //get index of the letter guessed in the hangman word
      var guessIndex = currentWord.indexOf(userGuess);
      //replace the dash with the correct letter in the correct place
      dashes.replace(dashes.indexOf(guessIndex), userGuess);
      //when dashes is the same as the current word, reset the game
      if (dashes.toString === currentWord) {
      reset(game);
      }
    } else {
      game.guessesLeft--;
      game.guesses.push(userGuess);
    }
    game.render();
  }
   
}
