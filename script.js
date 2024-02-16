'use strict';

const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const message = document.querySelector('.message');
const again = document.querySelector('.again');

// con so bi mat
let secretNumber = Math.trunc(Math.random() * 100 + 1);

// khoi tao
let scoreValue = 10;
let highScoreValue = 0;

// su kien
check.addEventListener('click', function () {
  const guessNumber = Number(guess.value);

  // khong phai so hoac so khong hop le
  if (!guessNumber || guessNumber < 1 || guessNumber > 100) {
    message.textContent = '🔥 Không hợp lệ';
  } // doan dung
  else if (guessNumber === secretNumber) {
    if (scoreValue > highScoreValue) {
      highScore.textContent = highScoreValue = scoreValue;
    }

    message.textContent = '✅ Đoán đúng rồi, chúc mừng bạn!!!';

    number.textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
  } // doan sai
  else {
    if (scoreValue > 0) score.textContent = --scoreValue;

    message.textContent =
      guessNumber > secretNumber ? '☝️ Quá cao' : '👇 Quá thấp';
  }
});

again.addEventListener('click', function () {
  scoreValue = 10;
  score.textContent = scoreValue;

  secretNumber = Math.trunc(Math.random() * 100 + 1);

  message.textContent = 'Bắt đầu đoán...';

  document.body.style.backgroundColor = '#222';

  guess.value = '';

  number.textContent = '?';
});
