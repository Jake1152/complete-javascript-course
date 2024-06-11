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

// Elements;
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currenies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound Sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/** # 143. Simple Array Methods
 * array도 object이다.
 */

// let arr = ['a', 'b', 'c', 'd', 'e'];

/** SLICE
 * 원본을 바꾸지 않고 얕은 복사를 한다
 */
// const pieceOfArr = arr.slice(2, 4);
// console.log(`pieceOfArr : `, pieceOfArr);
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2)); // negative begin parameter
// console.log(arr.slice(-1)); // last element of array
// console.log(arr.slice(1, -2));
// console.log(arr);
// console.log(arr.slice()); // shallow copy

// let arrSlice = arr.slice(); // shallow copy
// arrSlice[0] = '42';
// console.log('arrSlice', arrSlice); // ['42', 'b', 'c', 'd', 'e'];
// console.log(arr); // ['42', 'b', 'c', 'd', 'e'];

// console.log([...arr]); // deep copy

// let arrSpread = [...arr];
// arrSpread[0] = '42';
// console.log('arrSpread', arrSpread);
// console.log(arr);

/** SPLICE
 * 원본에서 잘라감, 원본도 바뀐다.
 */
// console.log('#SPLICE ', arr);
// console.log(arr.splice(-1, 1, 'z')); // []
// console.log(arr); // ['a', 'b', 'c', 'd', 'z', 'e']
// console.log(arr.splice(arr.length, 0, 'z')); // []
// console.log(arr); // ['a', 'b', 'c', 'd', 'z', 'e']
// console.log(arr.splice(2)); // ['c', 'd', 'e']
// console.log(arr); // ['a', 'b']
// console.log(arr.splice(-1)); // ['b']
// console.log(arr); // ['a']

// /** REVERSE
//  * 거꾸로 뒤집음
//  * 뒤집힌 배열을 반환값으로 주지만
//  * 원본까지 뒤집는다.
//  *
//  * 실제상황에서 원본까지 바꾸는 것은 안되는 경우가 많다.
//  */
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log('#REVERSE ', arr);
// console.log(arr2.reverse()); // ['j', 'g', 'h', 'i', 'j']
// console.log(arr2); // ['j', 'g', 'h', 'i', 'j']

// /** CONCAT
//  * 거꾸로 뒤집음
//  * 뒤집힌 배열을 반환값으로 주지만
//  * 원본까지 뒤집는다.
//  */

// console.log('#CONCAT ', arr);
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);
// console.log(arr);
// console.log(arr2);

// /** JOIN
//  * 배열의 각 요소들을 join에 주어진값으로 연결한다
//  */
// console.log('#JOIN ', arr);
// console.log(arr.join(arr, arr2)); // aa,b,c,d,eba,b,c,d,eca,b,c,d,eda,b,c,d,ee
// console.log(arr.join(arr)); // aa,b,c,d,eba,b,c,d,eca,b,c,d,eda,b,c,d,ee
// console.log(arr.join(arr2)); // af,g,h,i,jbf,g,h,i,jcf,g,h,i,jdf,g,h,i,je
// console.log(arr.join(arr2, arr)); // af,g,h,i,jbf,g,h,i,jcf,g,h,i,jdf,g,h,i,je
// console.log(arr.join(' - ')); // a - b - c - d - e
// console.log(arr);
// console.log(arr2);

/** # 144. The new at Method
 *  at()을 쓰느냐 [] 표기법을 쓰느냐
 */

// const arr = [23, 11, 64000];
// console.log(arr[0]);
// console.log(arr.at(0));

// // getting last array element
// console.log(arr[arr.length - 1]); // last element
// console.log('###'); // 왜 메서드 체이닝에 at()이 유리한가?
// console.log(arr.at(2).toLocaleString()); // last element
// console.log(arr[2].toLocaleString()); // last element
// console.log('###');
// console.log(arr[-1]); // undefined
// console.log(arr.at(-1)); // last element
// console.log(arr.at(-2)); // penultimate element
// console.log(arr.at(-3)); // 23
// console.log(arr.at(-4)); // undefind

// console.log('Jake'.at(0));
// console.log('Jake'.at(-1));

/** # 145. Looping Araays: forEach
 */

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [index, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// // forEach의 경우 callback을 쓴다., loop 중간에 빠져나올 수 없다.
// // console.log('# forEach style loop');
// console.log('---- FOREACH ----');

// const callfn = function (movement, index, array) {
//   if (movement > 0) {
//     console.log(`Movement ${index + 1}: You deposited ${movement}`);
//     // if (flag) return;
//   } else {
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// };

// movements.forEach(callfn);
// 0: function(200)
// 1: function(450)
// 2: function(400)

// .COMMIT_EDITMSG.swp

/** # 146. forEach With Maps and Sets
 */

// const currenies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound Sterling'],
// ]);

// currenies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// const curreniesUnique = new Set([
//   'USD',
//   'EUR',
//   'GBP',
//   'KRW',
//   'USD',
//   'EUR',
//   'EUR',
// ]);

// console.log(curreniesUnique);

/* Set
set에서 forEach를 썼을 때 key는 필요없는 값이지만
만약 set에서의 forEach만 다르게 했다면 다른 iterotor 유형에서 forEach를 쓰는 경우와 호환되지 않을 것이므로 
동일한 형식으로 표현하게된다.
 */
// curreniesUnique.forEach(function (value, key, map) {
//   // curreniesUnique.forEach(function (value, _, _) { // Error: Duplicate parameter name not allowed in this conte
//   // curreniesUnique.forEach(function (value, _, map) {
//   console.log(`${key}: ${value}`); // set에서는 key, value 가 같은 값
//   // console.log(`${_}: ${value}`); // set에서는 key, value 가 같은 값
//   // console.log(`${value}`); // set에서는 key, value 가 같은 값
// });

// for (const [key, value] of currenies.entries()) {
//   console.log(`${key}: ${value}`); // set에서는 key, value 가 같은 값
// }
/** # 151. Map
 * 새로운 배열에 인자로 넘어온 배열 모든 요소에 특정 연산을 적용한 결과를 저장한다.
 */

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSD = movements.map(mov => {
//   return mov * eurToUsd;
// });

// map with arrow function, rweturn
const movementsUSD = movements.map(mov => mov * eurToUsd);

// movements : 200,450,-400,3000,-650,-130,70,1300
console.log(`movements : ${movements}`);

// 220.00000000000003,495.00000000000006,-440.00000000000006,3300.0000000000005,-715.0000000000001,-143,77,1430.0000000000002
console.log(`movementsUSD : ${movementsUSD}`);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(`movementsUSDfor : ${movementsUSDfor}`);

const movementsDescription = movements.map(
  (movement, index) =>
    `Movement ${index + 1}: You ${
      movement > 0 ? `deposited` : `withdrew`
    } ${Math.abs(movement)}`
);
// if (movement > 0) {
//   return `Movement ${index + 1}: You deposited ${movement}`;
// } else {
//   return `Movement ${index + 1}: You withdrew ${Math.abs(movement)}`;
// }
// other way

console.log(`movementsDescription : `, movementsDescription);
// ['Movement 1: You deposited 200', 'Movement 2: You deposited 450', 'Movement 3: You withdrew 400', 'Movement 4: You deposited 3000', 'Movement 5: You withdrew 650', 'Movement 6: You withdrew 130', 'Movement 7: You deposited 70', 'Movement 8: You deposited 1300']
