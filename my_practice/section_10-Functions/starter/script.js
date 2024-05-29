'use strict';

/** # 129. Default Parameters
 */
// const bookings = [];

// // const alines
// const createBooking = function (
//   flightNum = 123,
//   numPassengers = 42,
//   price = 1000
// ) {
//   /** Before ES6 version default parameter
//    * numPassengers = numPassengers || 1;
//    * price = price || 199;
//    */

//   // common code
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   // console.log(booking);
//   bookings.push(booking);
// };

// createBooking();
// console.log(`bookings : `, bookings);

// createBooking('LH23');
// console.log(`bookings : `, bookings);

// createBooking('LH23', 800);
// console.log(`bookings : `, bookings);

// createBooking('LH23', 800, 420000);
// console.log(`bookings : `, bookings);

// createBooking('LH23', 420000);
// createBooking('LH23', undefined, 420000);
// console.log(`bookings : `, bookings);

/** # 130. How Passing Arguments Works: Value vs. Reference
 */
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   // console.log(flightNum, passenger);
//   if (passenger.passport === 24739479284) {
//     console.log('Checked in');
//   } else {
//     console.log('Wrong passport');
//   }
// };

// console.log('Before', jonas);

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const flightNum = flight;
// const passenger = jonas;
// console.log(`flightNum : ${flightNum}`); // deep copy
// console.log(`passenger : `, passenger); // shallow copy

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(jonas);
// console.log('newPassport(jonas);', jonas);
// // pass reference
// checkIn(flight, jonas); // wrong passport, 얉은 복사로 인해 newPassport()함수를 거치며 값이 변경됨

/* 132. Functions Accepting Callback Functions
 */

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${fn(str)}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   // confirm,ko
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('javascript is the best!', upperFirstWord);
// // oneWord('test');

// const high5 = function () {
//   console.log('Hi');
// };

// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

/* 133. Functinos Returning Functions
 */

// scope chain을 쓰게끔 만든다.
const greet = function (greeting) {
  // greeting: greeting,
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// 다른 함수를 반환 함수로 갖는다는 것의 의미
// const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
const greetArrow = greeting => {
  return name => {
    return console.log(`${greeting} ${name}`);
  };
};
greetArrow('Hello')('Jonas');
