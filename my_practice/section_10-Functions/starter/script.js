'use strict';

/**
 * Default parameters
 */
// const bookings = [];

// // ES6 style, default value for argument
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // const createBooking = function (flightNum, numPassengers, price) {
//   //ES5 style
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('KE747');
// createBooking('KE747', 42);
// createBooking('KE747', 142, 1420);

// // 가운데 인자만 비우고 호출하기
// createBooking('KE747', 1420); // 실패, 세번째 인자로 들어가기를 의도했던 값이 두번째가 된다.
// createBooking('KE747', undefined, 1420); // 성공,

/**
 * passing arguments
 */

// const flight = 'LH234';
// const jonas = {
//   name: 'jonas schemd',
//   passport: 2479456789,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 2479456789) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };

// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// // // Is the name as doing
// // const flightNum = flight;
// // const passenger = jonas;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() + 10000000);
// };

// // passport 변경
// newPassport(jonas);
// checkIn(flight, jonas);

/**
 * Functions Accepting Callback Functions
 * 다른 함수를 입려그올 받아들이는 함수를 생성
 */
// 간단한 문자열 반환하는 함수
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...othres] = str.split(' ');
//   return [first.toUpperCase(), ...othres.join(' ')];
// };

// // Higher-order function
// // console.log(oneWord('Test 55'));
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// // 두번쨰 인자로 전달한 함수를 호출한다, 콜백으로 사용
// /**
//  * 콜백 함수는 fn이라고 불리운다
//  */
// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// // JS uses callback all the time
// const high5 = function () {
//   console.log('hi');
// };
// document.body.addEventListener('click', high5);

// // forEach에도 콜백함수 사용가능
// ['Jonas', 'Matias', 'Adam'].forEach(high5);

/**
 * 위에 transform함수를 씀으로써 추상화를 이뤄낸다
 * 추상화를 함으로써 세부사항들은 숨길 수 있다
 * 추상적인 차원에서 생각할 수 있게 한다
 * 디테일은 신경쓰지 않는다
 *
 */

/**
 * Functions Returning Functions
 * 새 함수를 리턴하는 함수를 생성
 */
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jake');
greeterHey('Jason');

// 되기는 하지만 불편해보인다고 한다
greet('Hello')('jim');

// arrow function version
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey22 = greetArr('Hey');
greetArr('Hey')('Jonas');
greeterHey22('Jake');
greeterHey22('Jason');
