'use strict';

// Generate random number between 1 and 20
function getRandom() {
  return Math.floor(Math.random() * 20) + 1;
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

// Guess a number.
const guessNumber = function () {
  if (guessInput.value < secretNumber) {
    msgElement.textContent = '📉 Too low!';
    score.textContent -= 1;
  } else if (guessInput.value > secretNumber) {
    msgElement.textContent = '📈 Too High!';
    score.textContent -= 1;
  } else {
    msgElement.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    number.textContent = guessInput.value;
    // High score is set to secret number if the secret number is greater that current high score value
    if (secretNumber > highScore.textContent) {
      highScore.textContent = secretNumber;
    }
    checkBtn.disabled = true;
  }
  // Set score value to 0
  if (score.textContent == 0) {
    msgElement.textContent = '💥 You lost the game';
    checkBtn.disabled = true;
  }
};

//When you hit the again button, game refreshes
const again = function () {
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  score.textContent = 20;
  msgElement.textContent = 'Start guessing...';
  number.textContent = '?';
  // click again button and reset random number
  secretNumber = getRandom();
  checkBtn.disabled = false;
};

// Event triggered when Check button is clicked
checkBtn.addEventListener('click', guessNumber);

// Event triggered when Check button is clicked
againBtn.addEventListener('click', again);
