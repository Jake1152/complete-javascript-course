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
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jake');
// greeterHey('Jason');

// // 되기는 하지만 불편해보인다고 한다
// greet('Hello')('jim');

// // arrow function version
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const greeterHey22 = greetArr('Hey');
// greetArr('Hey')('Jonas');
// greeterHey22('Jake');
// greeterHey22('Jason');

/**
 * The call and apply Method
 */
// const lufthansa = {
//   arilne: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(744, 'jason');
// lufthansa.book(884, 'jonas');
// console.log(lufthansa);

// 루프한자 자회사인 eurowings도 동일한 기능을 쓰고 싶다
// 코드중복이 해내는 방법!
// 메서드를 가져다가 외부 함수에 저장
// 이 기능을 모든 항공사에 재사용할 수 있다
/**
 * 그것을 할 수 있는 함수가 call, apply, bind가 있다
 */
// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// book(23, 'sara');
// Call method
// book.call(eurowings, 23, 'Sarah');
// console.log(eurowings);

// book.call(lufthansa, 42, 'jason');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'mary cooper');
// console.log(swiss);

// Apply method
/**
 * call method와 비슷하지만 차이점으로는 인수목록을 받지 않는다
 * modern JS에서는 더이상 쓰이지 않는다
 * 더 나은 대안이 있다
 */
// const flightData = [583, 'George'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

/**
 * bind
 * 모든 함수 호출에 대해 수동으로 키워드를 설정하게 해준다
 * 차이점은 bind가 바로 함수를 호출하지 않는다는 것이다.
 * 이 키워드가 바인된 새 항수를 반환한다.
 * 바인드에 넘기는 값이 무엇이지 거기에 맞추어져 있다.
 */
// const lufthansa = {
//   arilne: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const swiss = {
//   airline: 'Swiss Air lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// // bind Method

// const book = lufthansa.book;
// // 새 함수를 반환해준다.
// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss);

// bookEW(23, 'Steven Williams');
// bookLH(23, 'Steven Williams');
// bookLX(23, 'Steven Williams');

// // 23이 이미 세팅되게 됨. 이제 이름만 넣는 것으로 호출 가능
// const bookE23 = book.bind(eurowings, 23);
// bookE23('jake');
// bookE23(24, 'Cooper'); // bind로 이미 묶은 인자 부분에 값을 넣으면 bind로 묶은 값을 덮어씀

// // With Event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// lufthansa.buyPlane();

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;

// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

/**
 * Immediately Invoked Function Expressions (IIFE)
 * 한번만 실행되고 사라지는 함수
 * async/await에서 사용됨
 */

// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// IIFE Immediately Invoked Function Expression
// (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will never run again'))();
// /**
//  * 함수가 범위를 생성함
//  * 왜 이런 패턴이 나왔는가?
//  * 예를 들면 전역범위에서 이 함수 범위에서 정의된 어떤 변수에도 접근할 수 없다
//  * 즉시 실행된 함수식은 더 이상 사용되지 않는다
//  */

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }

// console.log(isPrivate); // error
// console.log(notPrivate); // work, var라서 가능

/**
 * Closures
 */
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker(); // 3 passenger
/**
 * closure 기능 때문에 밖에서 접근 가능
 * 스코프 체인 만으로는 설명 힘듦
 * 실제로 어떻게 동작한느가?
 */

console.dir(booker);
