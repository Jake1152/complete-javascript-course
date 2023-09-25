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

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // 템플릿 문자열에 붙여넣기
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>
      `;

    // 첫번째 인자는 HTML에 붙이이려는 위치
    /**
     * beforebegin
     * afterbegin
     * beforeend
     * afterend
     */
    // 두번째 인자 삽입하고자 하는 HTML을 포함하는 문자열.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  acc.balance = acc?.movements?.reduce((acc, mov) => acc + mov, 0);
  // const balance = acc?.movements?.reduce((acc, mov) => acc + mov, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

/**
 * side effect만들기
 *  원본을 변형시킴
 * return값이 없다
 */
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);
console.log(createUsernames(accounts));

const updateUI = function (acc) {
  // Does not work, what happend?
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc.movements);

  // Display balance
  calcDisplaySummary(acc.movements);
};

// console.log(accounts);

let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  // currentAccount = accounts.find(acc => acc.owner === inputLoginUsername.value);
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  // if (currentAccount.pin === Number(inputLoginPin.value)) {
  if (currentAccount?.pin === Number(inputLoginPin?.value)) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';

    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

/**
 * 159 Implementing Transfer
 *
 * Event 인터페이스의 preventDefault() 메서드는 어떤 이벤트를 명시적으로 처리하지 않은 경우,
 * 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
 */
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);

  // 데이터 전송 가능
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    console.log('Transfer valid');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
  } else {
    console.log('Transfer non-valid');
  }
});

///////////////////////////////////////////////
///////////////////////////////////////////////
// LECTURES;
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // 달러로 환전

// const eurToUsd = 1.1;

// // normal fucnction version
// // const movementsUSD = movements.map(function (mov) {
// //   // return 23;
// //   return mov * eurToUsd;
// // });

// // arrow function version
// const movementsUSD = movements.map(mov => mov * eurToUsd);
// // const movementsUSD = movements.map(mov => {
// //   return mov * eurToUsd;
// // });

// console.log(movements);
// console.log(movementsUSD);

// const movementUSDfor = [];
// for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
// console.log(movementUSDfor);
// /**
// [
//   220.00000000000003,
//   495.00000000000006,
//   -440.00000000000006,
//   3300.0000000000005,
//   -715.0000000000001,
//   -143,
//   77,
//   1430.0000000000002
// ]
//  */

// /**
//  * 아래 콜백함수를 맵 매서드에 전달한다
//  */
// const movementsDescriptions = movements.map(
//   (mov, i, arr) =>
//     // `Movement ${i + 1}: You deposited ${mov}`;
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited ' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
//   // if (mov > 0) {
//   //   return `Movement ${i + 1}: You deposited ${mov}`;
//   // } else {
//   //   return `Movement ${i + 1}: You dithdrew ${Math.abs(mov)}`;
//   // }
// );
// console.log(movementsDescriptions);
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

/**
 * The filter Method
 */
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });

// // const deposits = [];
// for (const mov of movements) if (mov > 0) deposits.push(mov);

// console.log(movements);
// console.log(deposits);

/**
 * reduce method
 * movements의 모든 숫자를 더해본다
 * 계좌의 글로벌 잔액이 나온다
 */
// console.log(movements);

// accumulator => SNOWBALL
// callback function은 배열상 반복에서 호출된다.
/**
 * accumulator는 현재 값을 추가한다.
 * 반복할 때마다 accumulator를 계속 추가하고
 * return으로 반환해야한다.
 * 그럼으로써 다음 반복에서 사용할 수 있다.
 * 즉, 반복문마다 업데이트된 accumulator를 반환한다.
 * 콜백함수의 첫번쨰 인자는 prev value,  두번째 인자는 current value,
 * 세번째 인자는 index, 네번째 인자는 reduce를 통해 반복되고 있는 array
 */
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// });

// console.log(`balance : ${balance}`);

/**
 * 158. Implementing Login
 */
