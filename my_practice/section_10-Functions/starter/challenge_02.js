// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, 
attach an event listener 
that changes the color of the selected h1 element ('header') to blue, 
each time the BODY element is clicked. 
Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/** PREV version 
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
*/

// First try
/**
const header = document.querySelector('h1');
let count = 0;
document.body.addEventListener(
  'click',
  (() => {
    // header.style.color = 'red';
    if (header.style.color === 'red') {
      header.style.color = 'blue';
    } else {
      header.style.color = 'red';
    }
    console.log(++count);
  })()
  // (function () {
  //   header.style.color = 'red';
  //   if (header.style.color === 'blue') {
  //     header.style.color = 'red';
  //   } else {
  //     header.style.color = 'blue';
  //   }
  // })()
);
 */

/** Second try */
(function () {
  const header = document.querySelector('h1');

  // IIFE를 씀으로써 초기에는 color를 red로 설정할 수 있으며 외부에서 접근도 못하게 만들 수 있다.
  header.style.color = 'red';

  document.body.addEventListener('click', function () {
    if (header.style.color === 'blue') {
      header.style.color = 'red';
    } else {
      header.style.color = 'blue';
    }
  });
})();
