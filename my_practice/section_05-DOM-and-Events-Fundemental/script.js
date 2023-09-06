/**
 * 내 번호를 맞추어라 게임

번호 넣고 맞추기 
기본 점수가 주어지고 맞추면 증가 틀리면 감소
맞추면 배경도 변경
again버튼을 통해 리셋가능

깃에서 스타터 가져옴

*/

'use strict';

/**
 * DOM
 * querySelector
 * get element value from html using DOM
 * chnage element value from html using DOM
 */
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 13;
// setScore(20);

// /**
//  * input필터에서는 값을 얻기 위해 값 속성을 사용한다, 쓰기 위해 값 설정에도 사용 가능
//  */

// document.querySelector('.guess').value = 42;
// console.log(document.querySelector('.guess').value);

/**
 * Event
 *
 */
let secretNumber;
let score;
let highScore;

const init_setting = function (scoreNaxValue) {
  secretNumber = Math.trunc(Math.random() * scoreNaxValue + 1);
  score = scoreNaxValue;
  highScore = 0;
};
init_setting(20);

const setScore = function (_number) {
  document.querySelector('.score').textContent = _number;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('No Number!!');
  } else if (guess === secretNumber) {
    displayMessage('Correct Answer');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score < 1) {
    displayMessage('You lost the game');
    setScore(0);
  } else if (guess !== secretNumber) {
    if (guess < secretNumber) {
      displayMessage('Too low');
    } else {
      displayMessage('Too high');
    }
    score -= 1;
    setScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  init_setting(20);

  document.querySelector('.message').textContent = 'Start guessing...';
  setScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
