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
 * Lecture 107 REST PARAMETER
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

/** 108. Short Circuiting (&& and ||)
 */
// short-circuiting
console.log(3 || 'Jinho'); // 3, ||에서 앞에가 true이면 뒤에는 안감
console.log('' || 'Jinho'); // '' => false, falsy이기에 || 뒤에 부분이 평가됨
console.log(true || 0); // true

/** || operator
 * console.log() 인자로
 * falsy만 '||' 연산자들에 묶여 있는 경우
 * 마지막 falsy값이 출력된다.
 *
 * 하나라도 truth하면 첫번째로 나온 truth값을 출력한다.
 */
console.log(undefined || null); // null
console.log(undefined || null || 0); // 0
console.log(undefined || null || 0 || ''); //

console.log(undefined || 0 || '' || 'Hello' || 23 || null); //

// restaurant.numGuests = 23;
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10; // restaurant.numGuests 가 없다면 10 있다면 그 값
console.log(`guests1 : ${guests1}`);

const guests2 = restaurant.numGuests || 10; // restaurant.numGuests 가 없다면 10 있다면 그 값
console.log(`guests2 : ${guests2}`);

console.log();
/** && operator
 * console.log() 인자로
 * falsy가 중간에 '&&' 연산자들에 묶여 있는 경우
 * 처음 만난 falsy값이 출력된다.
 *
 * falsy가 없다면 마지막 truth 값이 리턴된다.
 */
console.log(`---- AND ----`);
console.log(0 && 'Jake');
console.log(42 && 'Jake' && 'Jim');

console.log(42 && 'Jake' && null && 'jim'); // null
console.log('Hi' && null && 'jim'); // null

console.log('Hi' && 0); // 0
console.log('Hi' && 0 && 'Test'); // 0
console.log('Hi' && undefined && null && { object: true }); // undefined
console.log('Hi' && false && true); // false

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

/**
 * React JSX에서는  statements를 허용하지 않는다.
 * 그런 경우 expression인 && 연산자를 써서 if문을 대체해볼 수 있다.
 */
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
