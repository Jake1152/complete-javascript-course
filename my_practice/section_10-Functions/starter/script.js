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
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  // console.log(flightNum, passenger);
  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const flightNum = flight;
const passenger = jonas;
console.log(`flightNum : ${flightNum}`); // deep copy
console.log(`passenger : `, passenger); // shallow copy

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
// pass reference
checkIn(flight, jonas); // wrong passport, 얉은 복사로 인해 newPassport()함수를 거치며 값이 변경됨
