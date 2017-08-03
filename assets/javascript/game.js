 <script type = "text/javascript">var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

document.onkeyup = function(event) {
  
  var guess = event.key;

  if (guess === letterToGuess) {
    win();
    alert("You've won!! Congrats on the victory, this game isn't easy with only 9 guesses but you've managed to beat the odds!")
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  var winsPsy = document.getElementById("wins");
  var lossesPsy = document.getElementById("losses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");

  winsPsy.innerHTML = wins;
  lossesPsy.innerHTML = losses;
  guessLeft.innerHTML = guessesLeft;
  letterGuessed.innerHTML = guessedLetters.join(', ');
}

function win() {
  wins++;
  resetGame();
}

function lost() {
  losses++;
  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function resetGame() {
  guessesLeft = 9;
  guessedLetters = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + letterToGuess);
}
</script>