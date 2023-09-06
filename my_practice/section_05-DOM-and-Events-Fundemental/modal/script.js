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

for (let idx = 0; idx < btnShowAllModal.length; idx++) {
  //   console.log(btnShowAllModal[idx].textContent);
  btnShowAllModal[idx].addEventListener('click', function () {
    console.log(idx);
    // document.querySelector('.modal').hidden = false;
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

    /**
     * 속성이 만약 여러개있다면 10개이상?
     * 매번 일일이 입력해서 처러하기는 번거롭
     * 특정 속성을 가져와야한다고 가정
     */
    // modal.style.display = 'block';
  });
}

/**
 * close 버튼이 클릭되면 CSS파일에 정의해둔 hidden 속성 추가
 */
btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

/**
 * overlay에도 동일하게 추가
 * 하지만 위에 btnCloseModal이랑 겹침
 * 어떤 DOM 속성인지만 다르고 동작은 동일하다
 * 함수로 분리 필요
 */
overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

/**
 *함수로 분리버젼
 */
const closeModal = function (_modal) {
  _modal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
};

closeModal(btnCloseModal);
closeModal(overlay);
