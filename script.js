'use strict';

// Generate random number between 1 and 20
function getRandom() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Store Random number
let secretNumber = getRandom();

// set score and highscore
let score = 20;
let highScore = 0;

//Get Check and Again Button element
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// Message output
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// display score
const setScore = function (score) {
  document.querySelector('.score').textContent = score;
};
// set number value
const setNumber = function (numberValue) {
  document.querySelector('.number').textContent = numberValue;
};
// set width of number box
const numberBoxWidth = function (width) {
  document.querySelector('.number').style.width = width;
};
// change body's background color
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

// Event triggered when Check button is clicked
checkBtn.addEventListener('click', function () {
  // Input value
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // When guess is right
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setBackgroundColor('#60b347');
    numberBoxWidth('30rem');
    setNumber(secretNumber);

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
      displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too High!');
      //decrease score value by 1
      score--;
      setScore(score);
    } else {
      displayMessage('💥 You lost the game');
      setScore(0);
    }
  }
});

//Event triggered when again button is clicked
againBtn.addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  setBackgroundColor('#222');
  numberBoxWidth('15rem');
  score = 20;
  setScore(score);
  displayMessage('Start guessing...');
  setNumber('?');
  //reset random number
  secretNumber = getRandom();
  // Make check button work
  checkBtn.disabled = false;
});
