'use strict';

/**
 * Variable scope
 */
function calcAge0(birthYear) {
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

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'jake';
// let job = 'traveler';
// const year = 1991;

// // functions
// console.log(addDecl(2, 3));
// // console.log(addExpr === undefined);
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// // var addExpr = function (a, b) {
// const addExpr = function (a, b) {
//   return a + b;
// };

// // const addArrow = (a, b) => a + b;
// var addArrow = (a, b) => a + b;

// // Example
// console.log(numProducts); // undefined ==> nullish and falsy
// // 호이스팅 때문에 numProducts가 이 순간에는 undefined가 되므로
// //  나중에 10이 할당되더라도 삭제 진행됨
// if (!numProducts) deleteShoppingCart();

// // let numProducts = 10;
// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted!');
// }
/**
 * var사용금지
 * clean code를 원한다면 선언을 사용하기 이전에 범위 상단에 변수를 적어둔다 각
 */

var x = 1;
let y = 2;
const z = 3;
// window 객체 확인

// console.log(x === window.x);
// console.log(y === window.y);
// // console.log(z === window.z);

// console.log(x === global.x);
// console.log(y === global.y);
// console.log(z === global.z);

// /**
//  * 97. The this Keyword in Practice
//  */
// console.log('this : ', this);

// // regular function call
// // regular function call + strict모드라서 this keyword는 undefined이다
// // strict 모드가 아닐 떄는 전역객체가 나온다.
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); // undifned
// };
// calcAge(1991); // iundefined

// const calcAgeAllow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeAllow(1991);

// /**
//  * ALlow function에서는 알수 있다
//  * allow function 내부에서 this 키워드를 쓰는 경우 this는 해당 함수 자체를 가리킨다
//  */
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     // console.log(2037 - this.year);
//     console.log(2037 - this?.year);
//   },
//   calcAgeAllow: () => {
//     console.log(this);
//   },
// };
// // 한칸 위의 객체를 가리킴
// jonas.calcAge();
// // allow의 경우 전역을 가리킨
// jonas.calcAgeAllow();

// /**
//  * This 키워드는 메서드를 호출하는 개체를 가리킬것이다
//  * this 키워드는 단순히 메서드를 작성한 개체를 가리키지 않는다
//  * Q. 메서드를 작성한 개체와 호출하는 개체의 차이점은 무엇인가?
//  * 객체에 접근해서 해당 메서드를 호출하는 것인데
//  * 메서드는 객체 내부에 정의되어있는 것 아닌가?
//  * 결국 호출과 정의가 같은 객체니까 위 설명에서 무슨 차이가 있는가?
//  */

// 함수는 단지 값이다
// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// console.log(`matilda: `, matilda);
// console.log(`jonas: `, jonas);

// matilda.calcAge();

// const f = jonas.calcAge;

// // 키워드 의미
// f(); // undefined
// 일반함수라서 그렇다, 어떤 객체에도 붙어있지 않다

/**
 * 99. Primitives vs Reference values
 */

let age = 30;
let oldAge = age;
age = 31;
// console.log(age);
// console.log(oldAge);

/**
 * 100. Primitives vs. Objects in Practice
 */

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage:', marriedJessica);
// marriedJessica = {}

console.log();
//Copying objects

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['A', 'B'],
};

/**
 * 계층 한 개 아래에서만  Object.assign({}, jessica2);이 동작함
 * 계층이 여러개 라면 동작하지 않음
 */
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('C');
jessicaCopy.family.push('D');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);

const a = '1234a';
const b = '1234b';

console.log(`a === b : ${a === b}`);
console.log(`a[0] === b[0] : ${a[0] === b[0]}`);
console.log(`a[0] === b[0] : ${a[0] === b[0]}`);
console.log(`a[0] === b[0] : ${a[0] === b[0]}`);
console.log(`a[3] === b[3] : ${a[3] === b[3]}`);
console.log(`a[4] === b[4] : ${a[4] === b[4]}`);

const ks = 'ㄱㄴㄷ남';
const kn = 'ㄱㄴㄷ북';

console.log(`ks === kn : ${ks === kn}`);
console.log(`ks[0] === kn[0] : ${ks[0] === kn[0]}`);
console.log(`ks[0] === kn[0] : ${ks[0] === kn[0]}`);
console.log(`ks[0] === kn[0] : ${ks[0] === kn[0]}`);
console.log(`ks[3] === kn[3] : ${ks[3] === kn[3]}`);
console.log(`ks[4] === kn[4] : ${ks[4] === kn[4]}`);
