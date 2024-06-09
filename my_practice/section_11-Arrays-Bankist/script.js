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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

// forEach의 경우 callback을 쓴다., loop 중간에 빠져나올 수 없다.
// console.log('# forEach style loop');
console.log('---- FOREACH ----');
movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function(200)
// 1: function(450)
// 2: function(400)
