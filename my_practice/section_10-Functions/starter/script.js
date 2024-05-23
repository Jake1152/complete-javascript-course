'use strict';

/** # 129. Default Parameters
 */
const bookings = [];

// const alines
const createBooking = function (
  flightNum = 123,
  numPassengers = 42,
  price = 1000
) {
  /** Before ES6 version default parameter
   * numPassengers = numPassengers || 1;
   * price = price || 199;
   */

  // common code
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  // console.log(booking);
  bookings.push(booking);
};

createBooking();
console.log(`bookings : `, bookings);

createBooking('LH23');
console.log(`bookings : `, bookings);

createBooking('LH23', 800);
console.log(`bookings : `, bookings);

createBooking('LH23', 800, 420000);
console.log(`bookings : `, bookings);

createBooking('LH23', undefined, 420000);
