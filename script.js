'use strict';

// Generate random number between 1 and 20
function getRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Store Random number
let secretNumber = getRandom();
//Get Check Button element
const checkBtn = document.querySelector('.check');
//Get Message element
const msgElement = document.querySelector('.message');
// Get Score element
const score = document.querySelector('.score');
// Get Highscore element
const highScore = document.querySelector('.highscore');
// Get Again Button element
const againBtn = document.querySelector('.again');
// Get guess Input element
const guessInput = document.querySelector('.guess');
// Get number element
const number = document.querySelector('.number');

//
// Event triggered when Check button is clicked
checkBtn.addEventListener('click', function () {
  if (!guessInput.value) {
    msgElement.textContent = '⛔ No number!';
  } else if (guessInput.value < secretNumber) {
    msgElement.textContent = '📉 Too low!';
    score.textContent -= 1;
  } else if (guessInput.value > secretNumber) {
    msgElement.textContent = '📈 Too High!';
    score.textContent -= 1;
  } else if (guessInput.value == secretNumber) {
    msgElement.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    number.textContent = guessInput.value;
    // High score is set to secret number if the secret number is greater that current high score value
    if (secretNumber > highScore.textContent) {
      highScore.textContent = secretNumber;
    }
    //Disable check button
    checkBtn.disabled = true;
  }
  // if score value is 0, player loses game
  if (score.textContent == 0) {
    msgElement.textContent = '💥 You lost the game';
    checkBtn.disabled = true;
  }
});

//Event triggered when Check button is clicked
againBtn.addEventListener('click', function () {
  guessInput.value = '';
  document.body.style.backgroundColor = '#222';
  score.textContent = 20;
  msgElement.textContent = 'Start guessing...';
  number.textContent = '?';
  //reset random number
  secretNumber = getRandom();
  // Make check button work
  checkBtn.disabled = false;
});
