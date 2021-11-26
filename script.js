'use strict';

function checkNumber() {
  let inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber, secretNumber);
  if (score != 0 && !won) {
    if (!inputNumber) {
      document.querySelector('.message').textContent =
        '!!! Enter a number between 1 and 20 !!!';
    } else if (inputNumber < secretNumber) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (inputNumber > secretNumber) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (inputNumber === secretNumber) {
      document.querySelector('.message').textContent = 'You Win!!!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('body').style.backgroundColor = 'green';
      won = true;
      if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  }
  if (score === 0) {
    document.querySelector('.message').textContent = 'You LOSE!!!!!';
  }
  return;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let won = false;

document.querySelector('.check').addEventListener('click', checkNumber);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  won = false;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
