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

/* # 132. Functions Accepting Callback Functions
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

/* # 133. Functinos Returning Functions
 */

// scope chain을 쓰게끔 만든다.
// const greet = function (greeting) {
//   // greeting: greeting,
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

// // 다른 함수를 반환 함수로 갖는다는 것의 의미
// // const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
// const greetArrow = greeting => {
//   return name => {
//     return console.log(`${greeting} ${name}`);
//   };
// };
// greetArrow('Hello')('Jonas');

/* # 134. The call and apply Methods
 */
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() // old version
  // new version
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(742, 'Jake');
// lufthansa.book(954, 'Jim Carrey');
// console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// ! Does not work
// book(23, 'Sara William'); // error, airline이 없다고 나온다. 전역변수인 book 영역에서 airline 변수가 없기에 그러하다.

// eurowings.book = lufthansa.book;
// eurowings.book(23, 'Sara Williams'); // Work

// fucntion은 object에 불가하다
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// book.call(swiss, 583, 'Mary Cooper');
// book.call(swiss, (583, 'Mary Cooper'));
// console.log(swiss);

// Apply method, call과의 차이점으로는 인수목록을 받지 않는다고 한다.
// apply는  더 이상 모던JS에서 쓰이지 않는다. 더 나은 방법이 있다고 한다.

// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData); // destructuring 가능
// console.log(swiss);

// book.call(swiss, flightData); // destructuring이 안됨
// console.log(swiss);

// book.call(swiss, ...flightData); // apply()처럼 destructuring 가능
// console.log(swiss);

/**
 * 135. bind
 */
const bookEW = book.bind(eurowings);
const bookLF = book.bind(lufthansa);
const bookSW = book.bind(swiss);
bookEW(23, 'Eric');
bookLF('123', 'Eric');
bookSW('456', 'Eric');

// https://en.wikipedia.org/wiki/Partial_application
// 미리 사용할 인자 일부를 설정하는 방법 => Partial Application 기법
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jake');

const bookEW23Jason = book.bind(eurowings, 23, 'Jason');
bookEW23Jason();

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes); // event 처리 함수에에서는 this키워드가 event handler에 연결된 DOM 요소를 가리킨다. 여기서는 button요소를 가리킨다.
};
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.2;
console.log(addVAT(100));
console.log(addTax(0.23, 23));

const addTaxRate = rate => {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
