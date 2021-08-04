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
let score = 20;
// Get Highscore element
let highScore = 0;
// Get Again Button element
const againBtn = document.querySelector('.again');
// Get guess Input element
const guessInput = document.querySelector('.guess');
// Get number element
const number = document.querySelector('.number');

//
// Event triggered when Check button is clicked
checkBtn.addEventListener('click', function () {
  // Convert guess input to number for strict comparison
  const guess = Number(guessInput.value);
  // When there is no input
  if (!guess) {
    msgElement.textContent = '⛔ No number!';
  }
  // When guess is right
  else if (guess === secretNumber) {
    msgElement.textContent = '🎉 Correct Number!';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    number.textContent = secretNumber;

    // set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //Disable check button
    checkBtn.disabled = true;
  }
  // When guess is higher or lower than secret number
  else if (guess !== secretNumber) {
    if (score > 1) {
      msgElement.textContent =
        guess < secretNumber ? '📉 Too low!' : '📈 Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msgElement.textContent = '💥 You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//Event triggered when Check button is clicked
againBtn.addEventListener('click', function () {
  guessInput.value = '';
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  msgElement.textContent = 'Start guessing...';
  number.textContent = '?';
  //reset random number
  secretNumber = getRandom();
  // Make check button work
  checkBtn.disabled = false;
});
