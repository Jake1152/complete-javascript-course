'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

// // slice method
// console.log(arr.slice(2)); //["c", "d", "e"]
// console.log(arr.slice(2, 4)); //["c", "d"]
// console.log(arr.slice(-2)); // ['d', 'e']
// console.log(arr.slice(-1)); // ['e']
// console.log(arr.slice(1, -2)); // ['b', 'c']
// console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
// console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// // SPLICE
// /*
// 원래 배열을 바꿈
// */
// console.log(arr.splice(2)); // ['c', 'd', 'e'] => ['a', 'b']
// arr.splice(-1); //
// console.log(arr); //['a', 'b', 'c', 'd']
// arr.splice(1, 2); //
// console.log(arr); //['a', 'd']

// // // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse);
// console.log(arr2);

// // // CONCAT
// const letters = arr.concat(arr2);
// console.log('arr.concat(arr2)');
// console.log(letters);
// console.log([...arr, ...arr2]);

// // // JOIN
// console.log(letters.join(' - ')); // a - b - c - d - e - j - i - h - g - f
/**
 * toSpliceed() 원본은 바꾸지않고 return
 * toReversed()
 * toSorted()
 */

/**
 * The new at Method
 * 배열의 끝요소를 가져오고 싶거나 끝요소부터 세고 싶다면 at()을 쓰는게 좋다
 */
// const arr = [23, 11, 64];
// console.log(arr[0]); // 23
// console.log(arr.at(0)); // 23
// console.log(arr[42]); // undefined
// console.log(arr.at(42)); // undefined

// console.log(arr[arr.length - 1]); // 64
// console.log(arr.slice(-1)[0]); // 64
// console.log(arr.at(-1)); // 64
// console.log(arr[-1]); // undefined

/**
 * Looping Arrays: forEach
 */
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('\n---- FOREACH ----');
// movements.forEach(function (movement) {
// for of와 매개변수 순서가 다름에 주의해야한다
// forEach항상 전체 배열에 걸려 반복한다.
// for of는 break로 중간에 나올 수 있다.
// movements.forEach(function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1} : You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1} : You withdrew ${Math.abs(movement)}`);
//   }
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

/**
USD: United States dollar
EUR: Euro
GBP: Pound sterling
 */
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique); // Set(3) { 'USD', 'GBP', 'EUR' }
/*
USD: USD
GBP: GBP
EUR: EUR
*/
// currenciesUnique.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // 특정 인자를 안쓰고 싶을때 _로 표현 Throwaway
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${_}: ${value}`);
// });

/**
 * The map Method
 */

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// 달러로 환전

const eurToUsd = 1.1;

// normal fucnction version
// const movementsUSD = movements.map(function (mov) {
//   // return 23;
//   return mov * eurToUsd;
// });

// arrow function version
const movementsUSD = movements.map(mov => mov * eurToUsd);
// const movementsUSD = movements.map(mov => {
//   return mov * eurToUsd;
// });

console.log(movements);
console.log(movementsUSD);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);
/**
[
  220.00000000000003,
  495.00000000000006,
  -440.00000000000006,
  3300.0000000000005,
  -715.0000000000001,
  -143,
  77,
  1430.0000000000002
]
 */

/**
 * 아래 콜백함수를 맵 매서드에 전달한다
 */
const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    // `Movement ${i + 1}: You deposited ${mov}`;
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited ' : 'withdrew'} ${Math.abs(
      mov
    )}`
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited ${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You dithdrew ${Math.abs(mov)}`;
  // }
);
console.log(movementsDescriptions);
/**
[
  'Movement 1: You deposited 200',
  'Movement 2: You deposited 450',
  'Movement 3: You dithdrew 400',
  'Movement 4: You deposited 3000',
  'Movement 5: You dithdrew 650',
  'Movement 6: You dithdrew 130',
  'Movement 7: You deposited 70',
  'Movement 8: You deposited 1300'
]
 */
