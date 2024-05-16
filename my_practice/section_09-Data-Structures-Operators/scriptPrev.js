'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/**
 * String Methods Practice
 */
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.replaceAll('_', ' ')} ${from} ${to} (${time.replace(
//     ':',
//     'h'
//   )})`;
//   console.log(output);
// }

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

/**
 * Working With Strings - Part 3
 */
// console.log('a+every+nice+str'.split('+')); // [ 'a', 'every', 'nice', 'str' ]
// console.log('Jonas Schmedtman'.split(' ')); // [ 'Jonas', 'Schmedtman' ]

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr', firstName, lastName.toUpperCase()].join(' ');
// console.log(newName); // Jesscia Ann Smith Davis

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const nameUpper = [];

//   for (const n of names) {
//     // # Case 1.
//     // n[0].toUpperCase() + n.slice(1);
//     // nameUpper.push(n[0].toUpperCase() + n.slice(1));
//     // # Case 2.
//     nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(' '));
// };
// const passenger = 'jesscia ann smith davis';
// capitalizeName(passenger); // Jesscia Ann Smith Davis
// capitalizeName('jonas schemdtmann'); //Jonas Schemdtmann

// // Padding
// const message = 'go to gate 23';
// console.log(message.padStart(20, '+').padEnd(30, '+')); // ++++++++++++go to gate 23+++++
// console.log('Jonas'.padStart(20, '+').padEnd(30, '+')); // ++++++++++++++++++++Jonas

// const markCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(markCreditCard(66589));
// console.log(markCreditCard(423458676543));
// console.log(markCreditCard('34354576687623'));

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed...';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(42);

// /**
//  * Working With Strings - Part 2
//  */
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase()); // tap air portugal
// console.log(airline.toUpperCase()); //TAP AIR PORTUGAL

// const passenger = 'jOnAS'; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); // Jonas

// const email = 'hello@jonas.io';
// const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); // hello@jonas.io

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); //hello@jonas.io
// console.log(email === normalizedEmail); //true

// // replacing
// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$');
// console.log(priceUS);

// const annoucement = 'All passenger come to boarding door 23, Boarding door 23!';

// console.log(annoucement.replace('door', 'gate')); // All passenger come to boarding gate 23, Boarding door 23!
// console.log(annoucement.replaceAll('door', 'gate')); // All passenger come to boarding gate 23, Boarding gate 23!

// // regex
// // //g -> global
// console.log(annoucement.replace(/door/g, 'gate')); // All passenger come to boarding gate 23, Boarding door 23!

// // Booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320')); // true
// console.log(plane.includes('Boeing')); // false
// console.log(plane.includes('Air')); // false

// // Praictie exercise
// const checkBaggage = function (item) {
//   const itemTrimmed = item.toLowerCase().trim();

//   if (itemTrimmed.includes('knife') || itemTrimmed.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard!');
//   }
//   //
// };

// checkBaggage('I have a laptop, some Food and a pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');
// checkBaggage('I');

/**
 * Working With Strings - Part 1
 */
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r')); // 앞에서부터 찾기, 찾은 index, 없으면 -1 return
// console.log(airline.lastIndexOf(' ')); // 뒤에서부터 찾기, 찾은 index, 없으면 -1 return
// console.log(airline.indexOf('portugal')); // -1
// console.log(airline.indexOf('Portugal')); // 8 단어 시작위치 return

// console.log(airline.slice(4)); // 인자에 넣은 숫자가 0~n까지 잘라서 버릴 숫자
// console.log(airline.slice(6, 10)); // (startIndex, endIndex)

// console.log(airline.slice(0, airline.indexOf(' '))); // TAP
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal

// console.log(airline.slice(airline.slice(-2))); // TAP Air Portugal
// console.log(airline.slice(airline.slice(1, -1))); // TAP Air Portugal

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   // Case 1.
//   if (
//     seat.lastIndexOf('B') !== -1 ||
//     seat.lastIndexOf('C') !== -1 ||
//     seat.lastIndexOf('D') !== -1 ||
//     seat.lastIndexOf('E') !== -1
//   ) {
//     console.log('middle seat!');
//   } else {
//     console.log('not a middle seat!');
//   }
//   // Case 2.
//   const seatAlpha = seat.slice(-1);
//   if (
//     seatAlpha === 'B' ||
//     seatAlpha === 'C' ||
//     seatAlpha === 'D' ||
//     seatAlpha === 'E'
//   ) {
//     console.log('middle seat!');
//   } else {
//     console.log('not a middle seat!');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('11C');
// checkMiddleSeat('11D');

// console.log(new String('jonas'));
// console.log(typeof new String('jonas'));
// const checkMiddleSeat = function (seat) {};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: openingHours,

  // ES6 enhanced object literals
  // 변수이름으로 속성 이름 생성
  // openingHours,
  openingHours,
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

// /**
//  * Map
//  * iteration
//  */
// const testFn = function () {
//   console.log('sdf');
// };

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
//   [funct, testFn],
// ]);

// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convery map to array
// console.log([...question]);
// console.log([question.entries()]);
// console.log([question.keys()]);
// console.log([question.values()]);
/**
 * Map
 * key, value
 */
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Fireze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :)')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// // rest.delete(2);
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

/**
 * Set
 */
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet);

// console.log(new Set('Jonas')); // Set(5) { 'J', 'o', 'n', 'a', 's' }

// console.log(ordersSet.size); // 3
// console.log(ordersSet.has('Pizza')); // 3
// console.log(ordersSet.has('Bread')); // 3
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// console.log(ordersSet);
// // console.log(ordersSet(2)); // no index, make error
// // ordersSet.clear();
// // console.log(ordersSet);

// // 순서 상관 없음
// for (const order of ordersSet) console.log(order);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // 각각의 element들이 array에 들어가게됨
// const staffUnique = [...new Set(staff)];
// // const staffUnique = new Set(staff);
// console.log(staffUnique);

// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']));

/**
 *  Looping Objects: Object Keys, Values, and Entries
 * 속성이름 반복
 */

// Prooertiy NAME
// const properties = Object.keys(openingHours);
// console.log(properties);
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// console.log(`We are open on ${properties.length} days: `);
// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Propertiy VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Propertiy ENTRIES
// // key,value
// const entries = Object.entries(openingHours);
// console.log(entries);

// // [key, value] desturing
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

/**
 * optional chaning (?.)
 */

// console.log(restaurant.openingHours.mon.open); // error
// restaurant.openingHours 부터 undefiend

//
/**
 * restaurant.openingHours.mon 가 있는지 없는지 확인한 뒤에 실행
 * 하지만 단지 1개일 뿐
 * 객체 내부로 깊게 들어간다면 매 순간마다 if문을 써서 존재하는지 아닌지 null체크를 해야할 수 있다
 * 이에 대해 ES6에서 좋은 방법이 있다
 * 옵셔널 체이닝 '?.' operator
 * 속성이 정의 되어 있지않으면 undefined가 되돌아온다
 */
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open); // error

// // WITH optional chaining
// console.log(restaurant.openingHours.mom?.open); // undefined
// console.log(restaurant?.openingHours?.mon);
// console.log(restaurant?.openingHours);

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   // console.log(day);
//   // const open = restaurant.openingHours[day]?.open;
//   // const open = restaurant.openingHours[day]?.open || 'closed';
//   const open = restaurant.openingHours[day]?.open ?? 'closed'; // ??은 nullish만 취급 0은 falsy
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? `Method does not exist`);
// console.log(restaurant.orderRisoto?.(0, 1) ?? `Method does not exist`);

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// // const users = [];
// console.log(users[0]?.name ?? 'User array empty');

/**
 * for of loop
 */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // const menu = [...restaurant.starterMenu];
// // const menu = [...restaurant.mainMenu];

// // for (let i = 0; i < menu.length; i++) {
// //   console.log(menu[i]);
// // }

// /**
//  * const가 가능한 이유는 for of 결과가 매번 새롭기 때문.
//  * 키워드를 계속하거나 중단 시킬 수 있음
//  */
// for (const item of menu) {
//   console.log(item);
// }
// console.log();

// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }
// console.log();

// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }

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
 * Spread
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
// // newArr[0] = 42;
// console.log(...newArr);
// console.log(badNewArr);
// console.log(arr);

// // spread를 이용하여 새로운 배열 생성
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);
/**
 * spread연산자는 destructuringr과 비슷한 점이 있다.
 * 배열에서 요소를 얻도록 도와준다.
 */

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// console.log('restaurant.mainMenu : ', restaurant.mainMenu);
// console.log('mainMenuCopy : ', mainMenuCopy);
// // restaurant.mainMenu[2] = 'Kimchi';
// // mainMenuCopy[2] = 'Kimchi';
// // restaurant.mainMenu.push('Kimchi');
// mainMenuCopy.push('Kimchi');
// console.log('After assign, restaurant.mainMenu : ', restaurant.mainMenu);
// console.log('After assign, mainMenuCopy : ', mainMenuCopy);

// // // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(menu);
// // console.log('menu : ', menu);
// const arr = [1, 2, { nestedObject: true }];
// const copiedArr = [...arr];

// copiedArr.push(4);
// copiedArr[2].nestedObject = false;

// console.log('arr : ', arr);
// console.log('copiedArr : ', copiedArr);
// // // iterable: arrays, strings, maps, sets, NOT objects
// // const str = 'Jonas';
// // const letters = [...str, ' ', 's.'];
// // console.log(letters);
// // console.log(...str);

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
// const { name, _, categories } = restaurant;
// console.log(name, openingHours, categories);

// // 아직 없는 속성에 대한 Destructuring
// // restaurant.menu
// const {
//   // other: new
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
// const { menu = [], starterMenu: startes = [] } = restaurant;
// console.log(menu, startes);

// // // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// console.log(obj);

// { c, d } = obj; // error, 중괄호로 시작하면 코드 블럭으로 이해되어서 뒤에 '=' 나올때 에러 발생
// ({ a, b } = obj);
// /*
// 중괄호로 시작하면 자바스크립트는 코드블록을 기대한다.
// 코드블럭에 아무것도 할당할 수 없으므로 여기 등호 한것과 같이 "예상치 못한 토큰" 오류가 생긴다
// 이 문제를 해결하기 위해 전체를 괄호로 감싸야한다
// */
// ({ a, b } = obj);
// console.log(a, b);

// const { fri } = openingHours;
// console.log('fri : ', fri);
// // 추가로 분해 가능
// const {
//   fri: { open, close },
// } = openingHours;
// console.log('open : ', open, ',\tclose : ', close);

// // 추가 분해 및 네이밍 추가
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
