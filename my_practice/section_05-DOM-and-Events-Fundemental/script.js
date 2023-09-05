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
// document.querySelector('.score').textContent = 20;

// /**
//  * input필터에서는 값을 얻기 위해 값 속성을 사용한다, 쓰기 위해 값 설정에도 사용 가능
//  */

// document.querySelector('.guess').value = 42;
// console.log(document.querySelector('.guess').value);

/**
 * Event
 * 
 */

const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
// document.querySelector('.number').textContent = secretNumber;
// 이벤트 헨들러, 인자를 넘김
// document.querySelector('.check').addEventListener('click', () => console.log(document.querySelector('.guess').value));
document.querySelector('.check').addEventListener('click', function () {
    // console.log(document.querySelector('.guess').value);

    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelctor('number').style.
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    if (!guess) {
        document.querySelector('.message').textContent = 'No Number!!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Answer';
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high';
        document.querySelector('.score').textContent -= 1
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low';
        document.querySelector('.score').textContent -= 1
    }
});

