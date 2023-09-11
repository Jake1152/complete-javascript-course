'use strict';

/**
 * Variable scope
 */
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // firstName을 찾기 위해 상위 범위 확인
  //   console.log(firstName);
  // error lastName은 존재하지 않음
  //   console.log(lastName);
  function printAge() {
    let output = `You ar ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   let millenial = true;
      const firstName = 'Steven';
      output = 'NEW OUTOUT';

      const str = `Oh, and you a millenial, ${firstName}`;
      console.log(str);

      /**
       * 함수는 블록 스코프이고
       * 이것을 증명하는 것은 strict모드라서 가능하다
       */
      function add(a, b) {
        return a + b;
      }

      //   const output = 'NEW OUTPUT!';
      //   add
    }
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

// const firstName = 'Jake';
// calcAge(1991);

/**
 * Hoisting
 */

console.log(me);
// console.log(job);
// console.log(year);

var me = 'jake';
let job = 'traveler';
const year = 1991;

// functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// Example
console.log(numProducts); // undefined ==> nullish and falsy
// 호이스팅 때문에 numProducts에 나중에 10이 할당됨에도 삭제 진행됨
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
/**
 * var사용금지
 * clean code를 원한다면 선언을 사용하기 이전에 범위 상단에 변수를 적어둔다 각
 */

var x = 1;
let y = 2;
const z = 3;
// window 객체 확인

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
