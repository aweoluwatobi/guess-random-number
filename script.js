'use strict';

// Generate random number between 1 and 20
const getRandom = () => Math.floor(Math.random() * 20 - 1 + 1) + 1;

// Store Random number
let secretNumber = getRandom();

// set score and highscore
let score = 20;
let highScore = 0;

//Get Check and Again Button element
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

// display message
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
// set score
const setScore = score =>
  (document.querySelector('.score').textContent = score);
// set Highscore
const setHighScore = highscore =>
  (document.querySelector('.highscore').textContent = highscore);
// set value
const setValue = value => (document.querySelector('.guess').value = value);
// set width of number box
const numberBoxWidth = width =>
  (document.querySelector('.number').style.width = width);
// set Number
const numberBoxDisplay = value =>
  (document.querySelector('.number').textContent = value);
// change body's background color
const setBackgroundColor = color =>
  (document.querySelector('body').style.backgroundColor = color);

// Event triggered when Check button is clicked
checkBtn.addEventListener('click', function () {
  // Get the value of the guess
  const guess = Number(document.querySelector('.guess').value);
  // When there is no input display No number
  if (!guess) {
    displayMessage('⛔ No number!');
  }
  // When guess is right
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    setBackgroundColor('#60b347');
    numberBoxWidth('30rem');
    numberBoxDisplay(secretNumber);

    // set highscore if score is higher than current high score
    if (score > highScore) {
      highScore = score;
      setHighScore(highScore);
    }
    //Disable check button
    checkBtn.disabled = true;
  }
  // When guess is lower or higher than secret number display too low or too high respectively
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? '📉 Too low!' : '📈 Too High!');
      //decrease score value by 1
      score--;
      setScore(score);
    } else {
      // If score is 0, you lose
      displayMessage('💥 You lost the game');
      setScore(0);
      setBackgroundColor('red');
    }
  }
});

//Event triggered when again button is clicked
againBtn.addEventListener('click', function () {
  setValue('');
  setBackgroundColor('#222');
  numberBoxWidth('15rem');
  score = 20;
  setScore(score);
  displayMessage('Start guessing...');
  numberBoxDisplay('?');
  //reset random number
  secretNumber = getRandom();
  // Make check button work
  checkBtn.disabled = false;
});
