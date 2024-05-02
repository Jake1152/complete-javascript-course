'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.open-modal');
const btnShowModal = document.querySelector('.show-modal');
const btnShowAllModal = document.querySelectorAll('.show-modal');
// console.log(btnOpenModal);
// console.log(btnShowModal);
// console.log(btnShowAllModal);

const openModal = function (evenType, _modal) {
  _modal.addEventListener(evenType, function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
};

for (let idx = 0; idx < btnShowAllModal.length; idx++) {
  openModal('click', btnShowAllModal[idx]);
  //   btnShowAllModal[idx].addEventListener('click', function () {
  //     console.log(idx);
  //     modal.classList.remove('hidden');
  //     overlay.classList.remove('hidden');
  //   });
}

/**
 * close 버튼이 클릭되면 CSS파일에 정의해둔 hidden 속성 추가
 */
// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

/**
 * overlay에도 동일하게 추가
 * 하지만 위에 btnCloseModal이랑 겹침
 * 어떤 DOM 속성인지만 다르고 동작은 동일하다
 * 함수로 분리 필요
 */
// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

/**
 *함수로 분리버젼
 */
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/**
 * keyborad를 눌러서 처리
 * ! 부정표현 대신 쓸 수 있는 것은 무엇이 있는가?
 *   !== false, !== null, !== undefined,
 */
document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Esc was pressed');
    closeModal();
  }
});

// document.addEventListener('keydown', closeModal);
