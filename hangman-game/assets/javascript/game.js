<<<<<<< HEAD

//currentWord
//guessesCount
//lettersGuesses

//chose all of the letters within 15 guesses and you win
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
  var currentWord = words[i];

//Game object to hold game variables
  var game = {
    wins: 0,
    currentWord: currentWord,
    guessesCount: 10,
    lettersGuesses: [],
    reset: function() {
      this.guessesCount = 10;
      lettersGuesses = [];
      return game;
    },
    // letters: currentWord.split(""),
    // dashes: [],
    // dash: function() {
    //   for (var i=0; i<letters.length; i++) {
    //     dashes[letters[i]] = "-";
    //   }
    // }
  } 
  //create my own dashes element
  wordAsArr = currentWord.split("");
  function find (wordAsArr, userGuess) {
    var indices = [];
    var array = wordAsArr;
    var element = userGuess;
    var idx = array.indexOf(element);
    while (idx != -1) {
      indices.push(idx);
      idx = array.indexOf(element, idx +1);
    }
    return indices;
    console.log(indices);
  }

  function dashSwap (wordAsArr, userGuess) {
    var indices = find(wordAsArr, userGuess);
    var dashes = Array(wordAsArr.length).fill("-");
    for (i = 0; i < indices.length; i++) {
      dashes[indices[i]] = userGuess;
    }
    return dashes;
  }

}
  
  //fuction create event when user presses keys
  document.onkeyup = function(event) {

  // // Determines which key was pressed.
  var userGuess = event.key;
    if (!dashes.includes("-")) {
      game.wins++;
    }
    if (!wordAsArr.includes(userGuess)) {
      game.guessesCount--;
      game.lettersGuesses.push(userGuess);
    }

    
    // //You have 15 guesses to pick what the computer picks
    // if (game.guessesLeft === 0) {
    //   game.losses++;
    //   game.reset(game);
    // }

    // //If the user guesses a letter in the hangman word
    // if (game.currentWord.includes(userGuess)) {
    //   //get index of the letter guessed in the hangman word
    //   var guessIndex = currentWord.indexOf(userGuess);
    //   //replace the dash with the correct letter in the correct place
    //   dashes.replace(dashes.indexOf(guessIndex), userGuess);
    //   //when dashes is the same as the current word, reset the game
    //   if (dashes.toString === currentWord) {
    //   game.reset(game);
    //   }
    // } else {
    //   game.guessesLeft--;
    //   game.guesses.push(userGuess);
    // }
   
=======
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
>>>>>>> 5887001e4c7d405cbd1a89179efc91d3e4e4382c
