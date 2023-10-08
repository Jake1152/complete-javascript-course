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

// 163 sort, sort관련하여 인자 추가
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  // movements.forEach(function (mov, i) {
  movs.forEach(function (mov, i) {
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
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // const balance = acc?.movements?.reduce((acc, mov) => acc + mov, 0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc?.balance}€`;
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
  calcDisplayBalance(acc);

  // Display balance
  calcDisplaySummary(acc);
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
  // console.log(currentAccount);

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
  // console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  // 데이터 전송 가능
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer valid');
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  } else {
    console.log('Transfer non-valid');
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

/**
 * opacity 변경으로 안보이게하고
 *
 */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    // accounts.splice(index, 1);
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // console.log(index);
    if (index !== -1) {
      // console.log(index);
      //
      containerApp.style.opacity = 0;
      // login ID
      accounts.splice(index, 1);
      // accounts.splice(index)
      // accounts = accounts[:index] + accounts[index + 1:]
    }
    // console.log(`accounts : ${accounts}`);
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
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
 * 161 some and money
 * 조건 지정 가능
 */
// console.log(movements);

// // Eqaulity
// console.log(movements.includes(-130)); // true

// // condition
// console.log(movements.some(mov => mov === -130)); // true

// const anyDeposits = movements.some(mov => mov > 0);
// console.log(anyDeposits); //true

// // Every
// console.log(movements.every(mov => mov > 0)); // false
// // console.log(account4.every(mov => mov > 0));
// console.log(movements);

/**
 * 162 flat. flatMap
 */
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// /*
// [
//   1, 2, 3, 4,
//   5, 6, 7, 8
// ]
// */

// const arrDeeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeeep.flat(2)); // 2단계 평탄화

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance); // 17840

// //  => 아래와 같이 표현 가능
// const overalBalanceChanning = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalanceChanning); // 17840

// // flatMap
// const overalBalanceChanningFlatMap = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalanceChanningFlatMap); // 17840

/**
 * 163 sorting arrays
 */
// strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort()); // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]
// console.log(owners); // [ 'Adam', 'Jonas', 'Martha', 'Zach' ]

// // numbers
// console.log(movements);
// /**
// [
//    200,  450, -400,
//   3000, -650, -130,
//     70, 1300
// ]
//  */
// console.log(movements.sort()); // 문자열이 아님에도 아래와 같은 결과가 발생
// /**
// [
//   -130, -400, -650,
//   1300,  200, 3000,
//    450,   70
// ]
//  */

// movements.sort((a, b) => {
//   console.log(a, b);
// });
// /**
//  * -400 -130
// -650 -400
// 1300 -650
// 200 1300
// 3000 200
// 450 3000
// 70 450
//  */

// // returne < 0 , A, B (keep order)
// // returne > 0 , B, A (switch order)

// // Assending
// movements.sort((a, b) => {
//   if (b > a) return -1;
//   if (a > b) return 1;
// });
// // movements.sort((a, b) => a - b); // a > b 가 크다를 의미
// console.log(movements);
// /**
//  [
//   -650, -400, -130,
//     70,  200,  450,
//   1300, 3000
// ]
//  */

// // Desending
// movements.sort((a, b) => {
//   if (b > a) return 1;
//   if (a > b) return -1;
// });
// // movements.sort((a, b) => b - a); // a < b 가 크다를 의미
// console.log(movements);
/**
[
  3000, 1300,  450,
   200,   70, -130,
  -400, -650
]
 */

/**
 * 164 More Ways of Creating and Filling Arrays
 */

// const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr); // [Array(7)], [1, 2, 3, 4, 5, 6, 7]
// console.log(new Array([1, 2, 3, 4, 5, 6, 7])); // [Array(7)], [1, 2, 3, 4, 5, 6, 7]

// // array coinstrcutor
// // Empty arrats + fill method
// const x = new Array(7);
// console.log(x); // [empty × 7]
// console.log(arr.map(() => 5)); // [empty × 7]

// x.fill(1);
// console.log(x); // (7) [1, 1, 1, 1, 1, 1, 1]

// x.fill(42, 3); // [3]인 부분부터 값을 채워넣는다
// console.log(x); // (7) [1, 1, 1, 42, 42, 42, 42]

// arr.fill(1152, 2, 5); // [2]인 부분부터 [5]이전까지 값을 채워넣는다
// console.log(arr); // (7) [1, 1, 1152, 1152, 1152, 42, 42]
// // 폐구간으로 시작해서 개구간으로 끝나느 조건은 동일하다.

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// // const z = Array.from({ length: 7 }, (_, i) => i + 1); // _ => throw way variable
// console.log(z);

// // const zz = Array.from({ length: 7 }, (cur, i) => cur + 1);
// // console.log(zz);

// // Iterable
// // Query Sellector All
// // 노드 목록을 배열로 변환 해야한다 ??
// // 동작이나 응용 프로그램이 배열에 저장되어 있지 않다고 가정한다.

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   // console.log(movementsUI.map(el => Number(el.textContent.replace('€', ''))));
//   console.log(movementsUI);

//   // 다른 방법으로 배열로 변환
//   // movementsUI2 를 누르면 결과를 새 배열로 배포할 수 있다
//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
//   console.log(movementsUI2);
// });

/**
 * 166. array practice
 */
// map()
const bankDepositSumMap = accounts.map(acc => acc.movements);
console.log(bankDepositSumMap); // (4) [Array(8), Array(8), Array(8), Array(5)]
/**
 * 0
(8) [200, 450, -400, 3000, -650, -130, 70, 1300]
(8) [5000, 3400, -150, -790, -3210, -1000, 8500, -30]
(8) [200, -200, 340, -300, -20, 50, 400, -460]
(5) [430, 1000, 700, 50, 90]
 */
// map().flat()
const bankDepositSumFlat = accounts.map(acc => acc.movements).flat();
console.log(bankDepositSumFlat); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

// flatMap()
const bankDepositSumFlatMap = accounts.flatMap(acc => acc.movements);
console.log(bankDepositSumFlatMap); // (29) [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]

// flat, filter, reduce
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0); // , initial value
// array1.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(bankDepositSum); // 25180

//2. 은행에 얼마나 많은 돈이 입금되었는지 계산한다.
// const numDepositions1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 1000).length;

// const numDepositions1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

// recude with ++ operator
// const numDepositions1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? count++ : count), 0);
// numDepositions1000에  0이 남는다.
// 이유는 후위 연산자에서 값을 증가는 시키지만 값을 증가시키기 이전 값을 return한다.

const numDepositions1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// numDepositions1000에  6이 남는다.
console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000)); // (6) [3000, 1300, 5000, 3400, 8500, 1000]
console.log(numDepositions1000); // 6
// console.log(numDepositions1000); // 5

let a = 10;
console.log(a++);
console.log(a);

// 숫자나 문자열 대신 새 개체 만들기
// 3.예금과 인출의 총합이 담긴 obejct 생성
// 기본적으로 2개의 합을 구한다 reduce를 사용해서!!!

// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 } // 초기값으로 object를 넘기는 모습
//   );
// console.log(sums); // {deposits: 25180, withdrawals: -7340}

// using decomposition
// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 } // 초기값으로 object를 넘기는 모습
//   );

const { deposits, withdrawals } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 } // 초기값으로 object를 넘기는 모습
  );

console.log(deposits, withdrawals); // 25180 -7340

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);
  const expectations = [
    'a',
    'an',
    'the',
    'but',
    'and',
    'or',
    'no',
    'in',
    'with',
  ];

  // const titleCase = title.toLowerCase().split(' ');
  // const titleCase = title
  //   .toLowerCase()
  //   .split(' ')
  //   .map(word => word.at(0).toUpperCase() + word.slice(1))
  //   .join(' ');

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (expectations.includes(word) ? word : capitalize(word)))
    .join(' ');
  return capitalize(titleCase);
};
console.log(convertTitleCase('This is a nice title'));
console.log(convertTitleCase('This is a LONG title but not too long'));
console.log(convertTitleCase('and here is another titile with an EXAMPLE'));
