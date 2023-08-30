/**
 * strict모드를 씀으로써 엄격하게 관리
 * 1. 특정 작업을 금지
 * 2. 특정 상황에서 눈에 보이는 오류를 만든다.
 * strict모드가 아니었다면 자바스크립트는 실수 했다는 것을 알려주지 않고 그냥 진행할것이다
 */
'use strict';

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :)');

// const interface = "Audio";
// const private = 4242;

/**
 *  function 은 프로그래밍의 기본 요소
 * 함수란 
 * 코드 일부로 재활용 가능
 * 변수를 가지고 있느 ㅎ마수는 1줄 이상 있다
 */
// function logger() {
//     console.log("My name is Jake");
// }
/**
 * calling / running / invoking function
 */
// console.log(logger(), typeof logger());
// // logger();
// // logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} organgs.`
//     return juice;
// }

// const appleJuice = fruitProcessor("5", "0");
// console.log(appleJuice);
// // console.log(fruitProcessor("5", "0"));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// // 역시 함수
// const num = Number('23');
/**
 * 함수 응용
 */

// const ageOne = calcAge1(2000);
// // version 1
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }

// // function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;;
// }


// const ageTwo = calcAge1(2004);
// console.log(ageOne, ageTwo)

// function expression
/**
 * expression은 값을 생성한다.
 * calcAge2은 그냥 값이다
 * function은 타입이 아니지만 값이다.
 * 중요한점!! 값은 변수에 저장할 수 있다.
 * 함수 선언과 함수 식의 차이
 * - 주된 차이
 * !!코드가 정의 되기 전에  함수 선언을 호출할 수 있다는 것
 * 호이스팅
 */
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// }
// const ageThree = calcAge2(2000);

// console.log(calcAge2, ageThree);


/**
 * Arrow function
 */

// function expression
// const calcAge2 = function(birthYear) {
//     return 2037 - birthYear;
// } 

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear
// const age3 = calcAge3(2000);
// console.log(age3);

/**
 * 화살표 함수일때는 function 키워드를 쓰면 에러가 발생
 * 정확히 어느 부분이 영향을 주는 것인지 확인 필요
 */
// const yearUnitlRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUnitlRetirement(2000, 'Jake'));
// console.log(yearUnitlRetirement(1978, 'BO'));


/**
 * Function calling other function
 */

/**
 * 아래 과일 주스 예시에서 일련의 과정이 필요하다 
 * 과일 구하고, 씻고, 자르고, 믹서기에 넣고, 다시 꺼내서 보관하고 등등
 */

// function cutFruitePieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitePieces(apples);
//     const orangePieces = cutFruitePieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} organgs.`
//     return juice;
// }

// console.log(fruitProcessor(2, 3));

/**
 * Array
 */

// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = [ 'Michael', 'Steven', 'Peter' ]
// console.log(friends);
// console.log(typeof friends);


// // const years = new Array(2000, 1984, 2002, 2023);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length]); // undefined
// console.log(friends[friends.length - 1]); 
/**
 * friends.length - 1 이 부분에서 JS는 문장이 아니라 식(expression)을 기대한다
 */


/**
 * friends를 const로 선언했지만 값이 바뀜
 * 원시타입만 바뀌지 않음
 * object는 참조하기 때문에 다름
 * 메모리 저장 방식의 차이점 떄문에 const임에도 배열에서 가리키는 값을 바꿀 수 있음
 * 하지만 변수가 가리키는 배열자체를 바꾸는 것은 불가
 * 즉, 가리키고 있는 배열에서 각 요소가 가리키는 값은 바꿀 수 있어도 가리키던 배열은 못바꿈
 */

// friends[2] = 'Jay';
// console.log(friends); // 3번쨰 값이 바뀜


// // friends = ['tomato']; // error

// const jim = ['jim', 'Schmedtmann', 2037 - 2000, 'traveler', friends];
// console.log(jim);

// // Exercise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const years = [2000, 1969, 2022, 2011, 2018];

// calcAge(years);
// console.log(calcAge(years)); // NaN

// console.log(years + 10); //2000,1969,2022,2011,201810
// console.log(years - 10); // NaN


// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; // [ 45, 68, 19 ]
// console.log(ages); // [ 45, 68, 19 ]

/**
 * Basic Array Operations (Methods)
 */
// const friends = [ 'Michael', 'Steven', 'Peter' ];

/**
 * push는 메소드
 * 배열은 object이고 object는 method가 있을 수 있어서 그런 듯 싶다
 */
// const newLength = friends.push('Jake'); // push의 리턴 값은 push된 이후의 배열의 길이
// console.log(friends); // [ 'Michael', 'Steven', 'Peter', 'Jake' ]
// console.log(newLength); // 4

// console.log(friends.unshift("John")); // unshift도 값이 배열에 추가된 이후에 배열의 길이를 return함
// console.log(friends);// [ 'John', 'Michael', 'Steven', 'Peter', 'Jake' ] 맨 앞에 값이 추가됨

// friends.pop(); // last
// const popped = friends.pop();
// console.log(popped); // Peter
// console.log(friends); // [ 'John', 'Michael', 'Steven' ]

// console.log(friends.shift()); // 맨 앞에 있던 값을 배열로부터 빼내며, 그값을 return 함
// console.log(friends); // [ 'Michael', 'Steven' ]

// console.log(friends.indexOf('Steven')); // 1, 인덱스 반환
// console.log(friends.indexOf('Bob')); // -1, 없는 요소이면 -1 리턴

// friends.push(23);
// console.log(friends.includes('Steven')); // true
// console.log(friends.includes('Bob')); // false
// console.log(friends.includes('23')); // false, 타입 강제를 하지 않는다.
// console.log(friends.includes(23)); // true

/**
 * includes를 이용해서 만들수 있는 유용한 것
 * 특정 인자 값이 배열에 포함되는지를 기준으로 조건문으로 사용
 * includes를 반환값이 boolean이라 가능.
 */
// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// }

/**
 * Object
 * 배열을 데이터 구조로 사용했었음
 * 
 */

/**
 * 아래의 배열에서는 
 * 각 요소들에게 이름을 줄 방법이 없다
 */
// review
const jimArray = [
    'Jim', // 이름
    'sche', // 
    2037 - 2000, // 나이
    'traveler', // 직업
    ["jame", "jane", "jim"] // 친구목록
]

/**
 * 객체는 중괄호를 이용해서 정의한다.
 * 5가지 속성으로 구성됨
 */
const jim = {
    firstName: 'Jake',
    lastName: 'Im',
    age: 2037 - 2000,
    job: "traveler",
    friends: ["jim", "jake", "jason"],
}

console.log(jim);

console.log(jim.lastName);
console.log(jim[`lastName`]);

const nameKey = 'Name';
console.log(jim['first' + nameKey]);
console.log(jim['last' + nameKey]);

// console.log(jim.'last' + namekey); // error
// 괄호 표기법을 써야한다

// const interestedIn = prompt('What do you whant to know about that person? Choose between firstName, lastName, age, job and friends');
// console.log(jim[interestedIn]); // undefiend 

// if (jim[interestedIn]) {
//     console.log(jim[interestedIn]); 
// } else {
//     console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
// }


jim.location = "Korea";
jim['slace'] = "jim";
console.log(jim);

/**
 * 배열에 있는 첫번째 친구가 가장 친함
 * 친구수를 알려면 여러가직 필요
 */

console.log(`${jim.firstName} has ${jim.friends.length}, and his bst firend is called ${jim.friends[0]}`);