'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice1EL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
dice1EL.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 주사위 생성
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    dice1EL.classList.remove('hidden');
    dice1EL.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if tri. swotcj tp mext [;ayer
    if (dice !== 1) {
      // Add dice to current score
      // currentScore += dice;
      scores[activePlayer] += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        scores[activePlayer];
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// hold btn 추가
btnHold.addEventListener('click', function () {
  if (playing) {
    console.log('hold button');
    // 1. add current score to active platyer's socre
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2.  >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice1EL.classList.add('hidden');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
    // 3.
  }
});
