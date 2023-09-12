'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const openingHours = {
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
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicuous pasta with ${ing1} ${ing2} ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/**
 * for of loop
 */

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// const menu = [...restaurant.starterMenu];
// const menu = [...restaurant.mainMenu];

// for (let i = 0; i < menu.length; i++) {
//   console.log(menu[i]);
// }

/**
 * const가 가능한 이유는 for of 결과가 매번 새롭기 때문.
 * 키워드를 계속하거나 중단 시킬 수 있음
 */
for (const item of menu) {
  console.log(item);
}
console.log();

for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log();

for (const [index, element] of menu.entries()) {
  console.log(`${index + 1}: ${element}`);
}

/**
 * Logical assignment operator
 */

// const rest1 = {
//   name: 'Capri',
//   numGuests: 42,
// };

// const rest2 = {
//   name: 'La Pizza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // rest1.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1); // { name: 'Capri', numGuests: 42 }
// console.log(rest2); // { name: 'La Pizza', owner: '<ANONYMOUS>', numGuests: 10 }

/**
 * ?? operator
 * nullish인 경우 ?? 뒤에 있는 값이 할당
 * falsy이기만 한 것은 포함되지 않음
 * Nullish: null and undefined (Not 0, '', NaN)
 */
// restaurant.numGuestes = document.all;
// if (restaurant.numGuestes) {
//   // ${restaurant.numGuestes}  ${} 안에 값이 falsy이면 변수명 그대로 출력됨
//   // restaurant.numGuestes is falsy
//   console.log(`${restaurant.numGuestes} is truthy`);
// } else {
//   console.log('restaurant.numGuestes is falsy');
// }
// const guests = restaurant.numGuests ? restaurant.numGuestes : 10;
// console.log(guests); // restaurant.numGuestes이 존재하므로 restaurant.numGuestes가 할당

// const guestCorrect = restaurant.numGuestes ?? 10;
// console.log(guestCorrect); //false
/**
 * Logical operator
 * OR
 * AND
 */
// Use ANY data type, return ANY data type/
// console.log('--------- OR ---------');
// console.log(3 || 'Jonas'); // 3
// console.log('' || 'Jonas'); // Jonas
// console.log(true || 0); // true
// // console.log() 안에 값으로 null 이랑 undefined 둘만 or로 묶인 경우 뒤에 있는 것이 출력되는 상황
// console.log(null || undefined); // undefined
// console.log(undefined || null); // null
// if (undefined || null) {
//   console.log('null in IF statement');
//   console.log(null);
// }
// // console.log() 입력으로 OR 연산자로 묶인 경우 적어도 하나의 피연산자가 true라면 출력됨 (falsy로만 구성된 경우는 예외적으로 마지막 것이 출력)
// console.log('' || 0 || undefined || '' || `` || -0); // -9
// console.log('' || 0 || undefined || '' || ``); // ``
// console.log('' || 0 || undefined || '' || `` || -0 || null || 42); // 42

// restaurant.numGuestes = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuestes : 10;
// console.log(guests1); // restaurant.numGuestes이 존재하므로 restaurant.numGuestes가 할당

// const guests2 = restaurant.numGuestes || 10;
// console.log(guests2); // restaurant.numGuestes이 존재하므로 restaurant.numGuestes가 할당

// /**
//  * console.log();
//  * 전부 true이면 미자믹것이 출력
//  * 하나라도 false이면 false인것이 출력
//  */
// console.log('--------- AND ---------');
// console.log(0 && 'Jonas'); // 0
// console.log(7 && 'Jonas'); // Jonas
// console.log(4 && null && 'Jonas'); // null

// console.log(restaurant.orderPizza); // [Function: orderPizza]
// console.log(restaurant.orderTomato); // undefined
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }
// // object가 있으면 실행
// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

/**
 * REST 패턴
 * spread의 반대 연산
 */
// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); // 1 2 [ 3, 4, 5 ]

// const [pizza, , risotto, ...othrefood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, othrefood);

// // 1) Objects
// const { sat, ...weekdyas } = restaurant.openingHours;
// console.log(sat);
// console.log(weekdyas);

// // 2) fucntions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);
// };
// add(2, 3);
// add(25, 6, 8, 2);
// add(6, 3, 2, 23, 45, 266, 44);

// const x = [23, 5, 6];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
// // mushrooms
// // [ 'onion', 'olives', 'spinach' ]
// restaurant.orderPizza('mushrooms');
// mushrooms
// []

/**
 * SPread
 */

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // spread 연산자
// const newArr = [1, 2, ...arr];
// console.log(newArr);

// // 쉼표로 다수 연산자 분리가능
// // 함수에 인수를 넘길때
// console.log(...newArr);
// console.log(1, 2, 7, 8, 9);

// // spread를 이용하여 새로운 배열 생성
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // iterable: arrays, strings, maps, sets, NOT objects
// const str = 'Jonas';
// const letters = [...str, ' ', 's.'];
// console.log(letters);
// console.log(...str);

// const ingredeients = [
//   [prompt("Let's make pasta Ingredient 1?")],
//   [prompt('Ingredient 2?')],
//   [prompt('Ingredient 3?')],
// ];

// console.log(ingredeients);

// restaurant.orderPasta(ingredeients[0], ingredeients[1], ingredeients[2]);
// restaurant.orderPasta(...ingredeients);

// Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guisepo' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorant Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// console.log(`${...str)}`); // 쉼표하나로 다수의 값이 분리하는 것을 기대하는 건 아니라고 함
/*
쉼표로 분리된 다수의 값은 보통 함수에 인자를 넘기거나 새 벼열을 만들때만 기대된다
*/

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Via del sole, 21',
//   starterIndex: 1,
// });

// 격리된 상태에서 하는 것이 좋다
// 인터페이스 만들어서 진행
// 따로 공부한느 게 가장 좋다
// 실제로 배움
// 프로제긑에 있는 주제
/**
 * 모던 자스에 집중함
 * 파괴 ESX
 * 구조로 분해
 * 저장할때 파괴 이용
 * 아주 간단한 배열
 * 파괴핮 ㅣㅇㄴ하고 진행
 */

/**
 * Destructureing
 */
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// /**
//  * restaurant.categories에서 destructing 처리
//  * 여러개가 있지만 일부만 가져올수도 있다
//  */
// const [first, second] = restaurant.categories;
// console.log(first, second);

// /**
//  * restaurant.categories에서 destructing 처리
//  * 여러개가 있지만 일부만 가져올수도 있다
//  */
// let [main, secondary] = restaurant.categories;
// console.log(main, secondary);

// /**
//  * Switching variable
//  * const temp = main;
//  * secondary = temp;
//  * console.log(main, secondary);
//  */
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // 다양한 변수 destrucring

// // console.log(restaurant.order[(2, 0)]);
// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// /**
//  * 중간을 제외하고 나머지만 받는 법
//  */
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j); // 2 [ 5, 6 ]

// /**
//  * nested인 array에서의 destructing
//  */
// const [i, , [j, k]] = nested;
// console.log(i, j, k); // 2 5 6

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 undeifned

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// /**
//  * Destructing with naming
//  */
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);

// // 아직 없는 속성에 대한 Destructuring
// // restaurant.menu
// const { menu = [], starterMenu: startes = [] } = restaurant;
// console.log(menu, startes);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(obj);

// /*
// 중괄호로 시작하면 자바스크립트는 코드블록을 기대한다.
// 코드블럭에 아무것도 할당할 수 없으므로 여기 등호 한것과 같이 "예상치 못한 토큰" 오류가 생긴다
// 이 문제를 해결하기 위해 전체를 괄호로 감싸야한다
// */
// [({ a, b } = obj)];
// console.log(a, b);

// const { fri } = openingHours;
// console.log(fri);
// // 추가로 분해 가능
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // 추가 분해 및 네이밍 추가
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
