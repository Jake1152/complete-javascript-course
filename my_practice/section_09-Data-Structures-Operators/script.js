'use strict';

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  // 변수이름으로 속성 이름 생성
  // openingHours,
  // 'thu', 'fri', 'sat'
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicuous pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/**
 * # 107. REST PARAMETER
 */
// 1) Destructuring
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// console.log(`arr : ${arr}`);
// // REST, because on LEFT side of =
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other); // 1 2 [3, 4, 5]
// console.log(`a : ${a},\tb : ${b},\tother : ${other}`);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// // Objects
// // sat만 먼저 가져오고 나머지 남은 부분들을 weekdays 변수로 할당시킴
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// // 2) Functnios
// const add = function (...inputNumbers) {
//   let sum = 0;
//   console.log(inputNumbers);
//   for (const number of inputNumbers) sum += number;
//   console.log(sum);
//   console.log();
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza('mushrooms', 'tomamto', 'olives', 'spinach');
// // mushrooms
// // [ 'tomamto', 'olives', 'spinach' ]
// restaurant.orderPizza('mushrooms');
/**
 * 스프레드와 REST 구문은 둘 다 똑같이 생겼지만
 * 어디서 사용되느냐에 따라 다르게 작동하죠
 *
 * 스프레드 연산자를 사용하면 쉼표로 값을 구분할 수 있죠
 *
 * 반면, REST 패턴은 기본적으로
 * 쉼표로 분리된 변수 이름을 쓸 때 사용되죠
 *
 * 쉼표로 이름(REST)을 구분하거나 값(Spread)을 구분하거나
 */

/** # 108. Short Circuiting (&& and ||)
 */
// short-circuiting
// console.log(3 || 'Jinho'); // 3, ||에서 앞에가 true이면 뒤에는 안감
// console.log('' || 'Jinho'); // '' => false, falsy이기에 || 뒤에 부분이 평가됨
// console.log(true || 0); // true

// /** || operator
//  * console.log() 인자로
//  * falsy만 '||' 연산자들에 묶여 있는 경우
//  * 마지막 falsy값이 출력된다.
//  *
//  * 하나라도 truth하면 첫번째로 나온 truth값을 출력한다.
//  */
// console.log(undefined || null); // null
// console.log(undefined || null || 0); // 0
// console.log(undefined || null || 0 || ''); //

// console.log(undefined || 0 || '' || 'Hello' || 23 || null); //

// // restaurant.numGuests = 23;
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // restaurant.numGuests 가 없다면 10 있다면 그 값
// console.log(`guests1 : ${guests1}`);

// const guests2 = restaurant.numGuests || 10; // restaurant.numGuests 가 없다면 10 있다면 그 값
// console.log(`guests2 : ${guests2}`);

// console.log();
// /** && operator
//  * console.log() 인자로
//  * falsy가 중간에 '&&' 연산자들에 묶여 있는 경우
//  * 처음 만난 falsy값이 출력된다.
//  *
//  * falsy가 없다면 마지막 truth 값이 리턴된다.
//  */
// console.log(`---- AND ----`);
// console.log(0 && 'Jake');
// console.log(42 && 'Jake' && 'Jim');

// console.log(42 && 'Jake' && null && 'jim'); // null
// console.log('Hi' && null && 'jim'); // null

// console.log('Hi' && 0); // 0
// console.log('Hi' && 0 && 'Test'); // 0
// console.log('Hi' && undefined && null && { object: true }); // undefined
// console.log('Hi' && false && true); // false

// console.log('42' && [] && '21' && {}); // [], {} 포함하여 모두 다 true

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// /**
//  * React JSX에서는  statements를 허용하지 않는다.
//  * 그런 경우 expression인 && 연산자를 써서 if문을 대체해볼 수 있다.
//  */
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

/** # 109. The Nullish Coalescing Operator (??)
 *
 * !! nullish: null and undefined (NOT 0 or '')
 */
// nullish는 null, undefined만 취급, 0, ''은 취급하지 않음
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10; // restaurant.numGuests 가 없다면 10 있다면 그 값
// console.log(`guests : ${guests}`);

// const guestCorrect = restaurant.numGuests ?? 10; // restaurant.numGuests 가 없다면 10 있다면 그 값
// console.log(`guestCorrect : ${guestCorrect}`);

/** # 110. Logical Assignment Operators
 */
// const rest1 = {
//   name: 'Capri',
//   // numGuests: 42,
//   numGuests: null,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Ginovanni Rossi',
// };

// console.log(rest1);
// console.log(rest2);
// console.log();

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // console.log(rest1);
// // console.log(rest2);
// // console.log();

// rest1.numGuests ||= undefined;
// // rest1.numGuests = rest1.numGuests || undefined;
// rest2.numGuests ||= undefined;
// console.log('# ||=');
// console.log(rest1);
// console.log(rest2);
// console.log();

// // nullish assignment ??
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log('# ??=');
// console.log(rest1);
// console.log(rest2);
// console.log();

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);
// console.log();

// rest1.numGuests &&= 10;
// // rest1.numGuests = rest1.numGuests && 10;
// rest2.numGuests &&= 10;
// console.log('# &&=');
// console.log(rest1);
// console.log(rest2);
// console.log();

/** Summary, Logical Assignment Operators.
 * &&=, truth
 *  왼쪽 할당받으려는 값이 truth여야지만 할당 연산 진행됨
 * ||=, falsy
 *  왼쪽 할당 받으려는 값이 false, truth와 상관없이 할당 연산 진행됨
 *  왼쪽이 true라면 왼쪽값이 다시 그대로 할당, 그렇지 않고 오른쪽이 true라면 오른쪽 값 할당
 * ??=, nullish
 *  nullish이므로 0, '', 같은 경우들 제외
 * null, undefined만 취급
 */

/** # 112. Looping Arrays for-of Looping
 */
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

// entires() [idx, value]
for (const item of menu.entries()) console.log(item);
console.log('\n', menu.entries());
console.log('\n', [...menu.entries()], '\n');

// old way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

// modern
console.log();
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}
