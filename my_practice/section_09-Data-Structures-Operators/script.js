'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 1,
});

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

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

/**
 * Destructing with naming
 */
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
// console.log(restaurantName, hours, tags);

// 아직 없는 속성에 대한 Destructuring
// restaurant.menu
const { menu = [], starterMenu: startes = [] } = restaurant;
console.log(menu, startes);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(obj);

/*
중괄호로 시작하면 자바스크립트는 코드블록을 기대한다.
코드블럭에 아무것도 할당할 수 없으므로 여기 등호 한것과 같이 "예상치 못한 토큰" 오류가 생긴다
이 문제를 해결하기 위해 전체를 괄호로 감싸야한다
*/
[({ a, b } = obj)];
console.log(a, b);

const { fri } = openingHours;
console.log(fri);
// 추가로 분해 가능
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// 추가 분해 및 네이밍 추가
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
