'use strict';

/**
 * Default parameters
 */
const bookings = [];

// ES6 style, default value for argument
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // const createBooking = function (flightNum, numPassengers, price) {
  //ES5 style
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('KE747');
createBooking('KE747', 42);
createBooking('KE747', 142, 1420);

// 가운데 인자만 비우고 호출하기
createBooking('KE747', 1420); // 실패, 세번째 인자로 들어가기를 의도했던 값이 두번째가 된다.
createBooking('KE747', undefined, 1420); // 성공,
