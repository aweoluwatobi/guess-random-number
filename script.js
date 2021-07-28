'use strict';
// Random number function
function getRandom() {
  return Math.floor(Math.random() * 20) + 1;
}

// Generate random number between 1 and 20

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

const guessNumber = function () {
  if (guessInput.value < secretNumber) {
    msgElement.textContent = 'Too low!';
    score.textContent -= 1;
  } else if (guessInput.value > secretNumber) {
    msgElement.textContent = 'Too High!';
    score.textContent -= 1;
  } else {
    msgElement.textContent = 'Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    // High score is set to secret number if the secret number is greater that current high score value
    if (secretNumber > highScore.textContent) {
      highScore.textContent = secretNumber;
    }
    checkBtn.disabled = true;
  }
  // Set score value to 0
  if (score.textContent < 0) {
    score.textContent = 0;
  }
};

// Event triggered when Check button is clicked
checkBtn.onclick = function () {
  guessNumber();
};

// Event triggered when Check button is clicked
againBtn.onclick = function () {
  document.querySelector('.guess').value = '';
  document.body.style.backgroundColor = '#222';
  score.textContent = 20;
  msgElement.textContent = 'Start guessing...';
  // click again button and reset random number
  secretNumber = getRandom();
  checkBtn.disabled = false;
};

// Enter a value and click on the check button.
// Use the debugger to walk through the code
