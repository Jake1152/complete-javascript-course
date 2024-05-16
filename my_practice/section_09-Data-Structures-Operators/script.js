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
const arr = [1, 2, ...[3, 4]];

console.log(`arr : ${arr}`);
// REST, because on LEFT side of =
const [a, b, ...other] = [1, 2, 3, 4, 5];
console.log(a, b, other); // 1 2 [3, 4, 5]
console.log(`a : ${a},\tb : ${b},\tother : ${other}`);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
// sat만 먼저 가져오고 나머지 남은 부분들을 weekdays 변수로 할당시킴
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// 2) Functnios
const add = function (...inputNumbers) {
  let sum = 0;
  console.log(inputNumbers);
  for (const number of inputNumbers) sum += number;
  console.log(sum);
  console.log();
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'tomamto', 'olives', 'spinach');
// mushrooms
// [ 'tomamto', 'olives', 'spinach' ]
restaurant.orderPizza('mushrooms');
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
