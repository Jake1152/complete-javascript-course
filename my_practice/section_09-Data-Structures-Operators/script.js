'use strict';

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
 * After 113. Enhance object literal
 */
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
// template literals and exrpession
// [`day-${2 + 4}`]: {
//   open: 0, // Open 24 hours
//   // close: 12 + 12,
// },
// };

// const openingHours = {
// const hours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
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

  /** ES6 enhanced object literals
   *  변수이름으로 속성 이름 생성
   *
   */
  // * Before ES6, key value를 명시해야했다
  // openingHours: openingHours,

  // * ES6 key: value  적을 필요 없이 삽입한 object 변수명을 key로 쓰고 내용물을 value로 사용
  // hours,

  openingHours,
  // * ES6 version function defined
  //  Before ES6
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // After ES6
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
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// // entires() [idx, value]
// for (const item of menu.entries()) console.log(item);
// console.log('\n', menu.entries());
// console.log('\n', [...menu.entries()], '\n');

// // old way
// for (const item of menu.entries()) {
//   console.log(`${item[0] + 1}: ${item[1]}`);
// }

// // modern
// console.log();
// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }

/** # 113. Enhanced Object Literals
 */
// console.log(restaurant);
// restaurant.order();

/** # 114. Optional Chaining(?.)
 *
 * object and array, chaining
 */

// console.log(restaurant.openingHours.mon); // undefined
// console.log(restaurant.openingHours.mon.open); // error, restaurant.openingHours이 undefined였으므로 오브젝트로 가정하고 내부 프로퍼티에 접근하고자하면 에러 발생

// 프로퍼티 중간에 undefined라서 발생할 수 있는 error를 방지하기 위한 방법..
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// ?. optional chaining ES2020에서 추가됨
// console.log(restaurant.openingHours.mon?.open); // undefined

// multiple optional chaining
// console.log(restaurant.openingHours.mon?.open); // undefined
// console.log(restaurant.openingHours?.mon?.open); // undefined
// console.log(restaurant?.openingHours?.mon);
// console.log(restaurant?.openingHours);
// console.log(restaurant);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   // console.log(day);
//   // || 연산자의 경우 falsy하므로 0도 false로 처리됨
//   // const open = restaurant.openingHours[day]?.open || 'closed';
//   // ??을 이용하여 nullish로 처리
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }
/* falsy result
On mon, we open at closed
On tue, we open at closed
On wed, we open at closed
On thu, we open at 12
On fri, we open at 11
On sat, we open at closed
On sun, we open at closed
// saturday에는 0시부터 열지만 || 로직연산에서 0이 falsy하므로 의도대로 동작하지 않음
*/

/* nullish result
On mon, we open at closed
On tue, we open at closed
On wed, we open at closed
On thu, we open at 12
On fri, we open at 11
On sat, we open at 0
On sun, we open at closed
*/

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(2, 3) ?? 'Method does not exist');

// Arrays
// const users = [{ name: 'Jonas', email: 'hello@honas.io' }];
// console.log(users);
// console.log(users[0]);
// console.log(users[2]?.name ?? 'User array empty');
// console.log(users[2]?.name);

// if (users.length > 0) console.log(users[0].name);
// else console.log('User array empty');

// // modern
// console.log();
// for (const [index, element] of menu.entries()) {
//   console.log(`${index + 1}: ${element}`);
// }

/** 115. Looping Objects: Object Keys, Values, and Entries
 */
// Object;

// const properties = Object.keys(openingHours);
// console.log('properties : ', properties);

// let openStr = `We are open on ${properties.length} : `;

// // for (const day of Object.keys(openingHours)) {
// for (const day of properties) {
//   // console.log('day : ', day);
//   openStr += `${day}, `;
// }
// console.log('openStr : ', openStr);

// const valueOfProperties = Object.values(openingHours);
// console.log('valueOfProperties : ', valueOfProperties);

// const entriesOfProperties = Object.entries(openingHours);
// console.log('entriesOfProperties : ', entriesOfProperties);

// // entries, destructuring
// for (const [key, { open, close }] of entriesOfProperties) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log();
// // entries, destructuring, any other name
// for (const [day, value] of entriesOfProperties) {
//   console.log(`day : ${day}, value :`, value);
//   console.log(`On ${day} we open at ${value.open} and close at ${value.close}`);
// }

/** 117. Sets
 */
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);
// console.log('orderSet : ', orderSet);

// console.log(new Set('Jake'));

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// console.log(orderSet.has('Bread'));
// console.log(orderSet.has('Croquette'));
// orderSet.add('Croquette');
// orderSet.add('Croquette');
// console.log('orderSet : ', orderSet);

// orderSet.delete('Risotto');
// console.log('orderSet : ', orderSet);

// // set은 indexing 불가
// console.log(orderSet[0]);
// console.log(orderSet[1]);
// console.log(orderSet[-42]);

// console.log('#Loop of orderSet ');
// for (const order of orderSet) console.log(order);

// orderSet.clear();
// console.log('orderSet : ', orderSet);

// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// console.log('staff : ', staff);

// // const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)];
// console.log('staffUnique : ', staffUnique);

// // array to set and then cal size
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// str to set and then cal size
// 철자가 몇개인지 셀 수 있다. 단, 중복제거
// console.log(new Set('Waiter Chef Waiter Manager Chef Waiter').size);

/** 118. Maps: Fundamentals
 * Set에서는 key로 문자열만 가질 수 있었지만
 * Map에서는 어떠한 것도 키가 될 수 있다.
 */

// let rest = new Map();
// console.log(rest);

// rest.set('name', 'Classico Italiano');
// console.log(rest);

// rest.set(1, 'Firenze, Italy');
// console.log(rest);

// const arr = [1, 2, 3];
// // rest.set([1, 2, 3], 'Seoul');
// // rest.set(arr, 'Seoul');
// console.log(rest);
// /*
// <ref *1> Map(4) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   [ 1, 2, 3 ] => 'Seoul',
//   [Circular *1] => 'recur'
// }
// */

// rest.set('open', 11).set('closed', 23);
// console.log(rest);

// // multiple things setting
// rest.set(true, 'We are open :)').set(false, 'We are closed :(');
// console.log(rest);

// console.log("rest.get('name') : ", rest.get('name'));
// console.log("rest.get('namee') : ", rest.get('namee'));
// console.log('rest.get([1, 2, 3]) : ', rest.get([1, 2, 3]));
// console.log('rest.get(arr) : ', rest.get(arr), `\t#arr is [${arr}]`);
// console.log('rest.get(1) : ', rest.get(1));

// let time = 21;
// console.log(
//   `Now, ${time} o'clock.`,
//   rest.get(time > rest.get('open') && time < rest.get('closed'))
// );

// time = 24;
// console.log(
//   `Now, ${time} o'clock.`,
//   rest.get(time > rest.get('open') && time < rest.get('closed'))
// );

// console.log("rest.has('categories') : ", rest.has('categories'));
// console.log();

// console.log('rest : ', rest);
// console.log('rest.has(1) : ', rest.has(1));

// /*
// delete() 메서드를 쓰는 과정은 느리다.
// hasOwnProperty를 주로 쓴다하고 이 내용은 뒤에 파트에서 다루어진다.

//  * ref
//   hasOwnProperty를 사용하면 안되는 이유 => https://velog.io/@jay/be-carefule-use-hasownproperty
//  */
// console.log('rest.delete(1) : ', rest.delete(1));
// console.log('rest.has(1) : ', rest.has(1));
// console.log('rest : ', rest);
// console.log();

// console.log('rest.clear() : ', rest.clear());

// rest = new Map({ 1: 'number', str: 'string' });
// console.log(rest);

/** 119. Map iteration
 */

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Try again!'],
// ]);

// console.log(`question, `, question);

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(`hoursMap, `, hoursMap);

// // Quiz map
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// // const answer = Number(prompt('Your answer'));
// // console.log(answer);
// const answer = 3;

// console.log(
//   "question.get(question.get('correct') === answer) : ",
//   // question.get(question.get('correct') == answer ?? false)
//   question.get(question.get('correct') === answer)
// );

// console.log([...question]);
// console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// const mapObject = new Map();
// mapObject.set(1, '42');
// console.log('# mapObject : ', mapObject);

/** 122. Working With Strings - part01
 */
// const airline = 'TAP Air Portugal';
// const plane = 'A320';
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(`airline.indexOf('r')  : ${airline.indexOf('r')}`);
// console.log(`airline.lastIndexOf('r')  : ${airline.lastIndexOf('r')}`);
// console.log(`airline.indexOf('portugal')  : ${airline.indexOf('portugal')}`);

// console.log(`airline.slice(4)  : ${airline.slice(4)}`); // 4'th index 이전까지는 날려버린다., 4th index부터 뒷부분을 가져간다.
// console.log(`airline.slice(4, 7) : ${airline.slice(4, 7)}`); // Air

// console.log(
//   `airline.slice(0, airlne.indexOf(' ')) : ${airline.slice(
//     0,
//     airline.indexOf(' ')
//   )}`
// ); // TAP
// console.log(
//   `airline.slice(airlne.lastIndexOf(' ')) : ${airline.slice(
//     airline.lastIndexOf(' ')
//   )}`
// ); // Portugal

// console.log(`airline.slice(-2) : ${airline.slice(-2)}`); // al
// console.log(`airline.slice(1, -1) : ${airline.slice(1, -1)}`); // AP Air Portuga
// console.log(`airline.slice(0, -1) : ${airline.slice(0, -1)}`); // TAP Air Portuga
// console.log(`airline.slice() : ${airline.slice()}`); // TAP Air Portugal
// console.log(`airline.slice(0, 0) : ${airline.slice(0, 0)}`); //

// console.log();
// // const checkMiddleSeat = seat => {};
// const checkMiddleSeat = function (seat) {
//   // B and E middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log(`${seat} is middle seat`);
//   } else {
//     console.log(`${seat} is not middle seat`);
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');
// checkMiddleSeat('3A');

// console.log(new String('Jinho'));
// console.log(typeof new String('Jinho')); // object, string은 원시타입이지만 new 를 썼기에 object로 나오는 것을 볼 수 있다.
// console.log(typeof new String('Jinho').slice(1)); // # string
// console.log(`typeof 'Jinho': ${typeof 'Jinho'}`); // # string
// console.log(`typeof 'Jinho'.slice(1) : ${typeof 'Jinho'.slice(1)}`); // # string,

// console.log(
//   `typeof new String('Jinho'.slice(1)) : ${typeof new String('Jinho'.slice(1))}`
// ); // # string,

// console.log(new String('Jinho').slice(1)); // inho, 왜 타입이 object가 아닌가?

// const slicedStr = String('Jinho').slice(1);
// console.log(typeof slicedStr); // inho, 왜 타입이 object가 아닌가?

/** 123. Working With Strings - part02
 */
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// const passenger = 'jOnAS'; // Jonas
// console.log(`passenger : ${passenger}`);
// const passengerLower = passenger.toLowerCase();
// console.log(`passengerLower : ${passengerLower}`);
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(`passengerCorrect : ${passengerCorrect}`);

// const toBePascalCase = () => {};

// // Comparing emails
// const email = 'hello@jake.io';
// const loginEmail = ' Hello@Jake.Io';

// // if (email.toLowerCase() === loginEmail.toLowerCase()) {
// //   console.log(`email and loginEmail are same thing`);
// // } else {
// //   console.log(`email and loginEmail are not same thing`);
// // }
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(`trimmedEmail : ${trimmedEmail}`);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(`normalizedEmail : ${normalizedEmail}`);
// console.log(email === normalizedEmail);

// // replacing
// // 100 000 000 000 000 000 Euro
// // 100,
// const priceGB = '288,97€';
// console.log(`priceGB : ${priceGB}`);
// const priceUS = priceGB.replace('€', '$').replace(',', '.');
// console.log(`priceUS : ${priceUS}`);

// const announcement = `All passengers come to barding door 23. Boarding door 23!`;

// console.log(`announcement : ${announcement}`);

// console.log(
//   `announcement.replace('door', 'gate'): ${announcement.replace(
//     'door',
//     'gate'
//   )}` //  All passengers come to barding gate 23. Boarding door 23!
//   // 첫번째만 바뀜
// );

// // replaceAll 사용하여 변경
// console.log(
//   `announcement.replaceAll('door', 'gate') : ${announcement.replaceAll(
//     'door',
//     'gate'
//   )}`
// ); //  All passengers come to barding gate 23. Boarding gate 23!

// // 정규식 사용하여 변경
// console.log(
//   `announcement.replace(/door/g, 'gate') : ${announcement.replace(
//     /door/g,
//     'gate'
//   )}`
// ); //  All passengers come to barding gate 23. Boarding gate 23!

// // Booleans
// const plane = 'Airbus A320neo';
// console.log(`plane.includes('A320') : ${plane.includes('A320')}`);
// console.log(`plane.includes('Boeing') : ${plane.includes('Boeing')}`);
// console.log(`plane.startsWith('Air') : ${plane.startsWith('Air')}`);
// console.log(`plane.startsWith('Aib') : ${plane.startsWith('Aib')}`);

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// const checkBaggage = function (items) {
//   // const baggage = items.toLowerCase();
//   const baggage = items; // Knife, KNIFE는 통과될 수 있는 문제 발생
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('You are NOT allowed on board');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some food and a pocket knife');
// checkBaggage('socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

/** 124. Working With Strings - Part 3
 */

// console.log('a+very+nice+string'.split('+'));
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
// console.log(`newName: ${newName}`);

// const getCapitalizeNames = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for (const n of names) {
//     const capitalizeName = n[0].toUpperCase() + n.slice(1).toLowerCase();
//     // const capitalizeName = n.replace(n[0], n[0].toUpperCase());
//     namesUpper.push(capitalizeName);
//   }
//   return namesUpper.join(' ');
// };

// const passenger = 'jessica ann smith davis';
// // for
// console.log(`passenger  : ${passenger}`);
// const capitalizeNames = getCapitalizeNames(passenger);

// console.log(`capitalizeNames  : ${capitalizeNames}`);

// // Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(message.length + 3, '+'));
// console.log('Jonas'.padStart(35, '+'));
// // +++++++++++Go to gate 23!
// // ++++++++++++++++++Jonas
// console.log(message.padStart(20, '+').padEnd(35, '+'));
// console.log('Jonas'.padStart(20, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   const str = String(number) + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(
//   `maskCreditCard(431233453443563) : ${maskCreditCard(431233453443563)}`
// );
// console.log(
//   `maskCreditCard('234543643654634109') : ${maskCreditCard(
//     '234543643654634109'
//   )}`
// );

// // Repeat
// const message2 = 'Bad weather... All Departures Delayed... ';
// console.log(message2.repeat(5, '\n'));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(12);
// planesInLine(3);

/**126. String Methods Practice
 */
const displayFligthStatus = function (flights) {
  for (const flight of flights.split('+')) {
    // console.log(`flight : ${flight}`);
    // console.log(flight);
    let [DepArrInfo, fromFlightInfo, toFlightInfo, time] = flight.split(';');

    DepArrInfo = DepArrInfo.replaceAll('_', ' ');
    DepArrInfo = DepArrInfo.includes('Delay') ? '🔴' + DepArrInfo : DepArrInfo;

    console.log(
      DepArrInfo.padStart(20, ' '),
      'from',
      fromFlightInfo.slice(0, 3).toUpperCase(),
      'to',
      toFlightInfo.slice(0, 3).toUpperCase(),
      `(${time.replace(':', 'h')})`
    );
  }
};

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(`flights.split('+') : \n${flights.split('+').join('\n')}`);

displayFligthStatus(flights);
/** Instructor's code
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+'));

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.replaceAll('_', ' ')} ${from} ${to} (${time.replace(
//     ':',
//     'h'
//   )})`;
//   console.log(output);
// }

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}
 */

// branch move to main
