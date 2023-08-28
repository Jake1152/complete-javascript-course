// let js = 'amazing';
// 아래 수식의 각 피연산자는 다른 값
// console.log(40+8+23-10);
// comment 

/*
value and variable
개인정보를 예시로 만듦
'Jake'
value는 데이터 조각
근본적인 정보 단위
*/
// 변수에 값을 저장하면 계속 재활용 할 수 있다.
/*
console.log('Jake');
console.log('42');

let firs$tName = "Marie";
console.log(firs$tName );
console.log(firs$tName );
console.log(firs$tName );
*/
/**
 * 네이밍 규칙
 * 숫자로 시작 불가
 * 알파벳 대소문자, 숫자, _ 언더바, $ 달러사인 사용 가능
 * _, $ 제외한 특수문자 사용 불가
 * 예약어 사용불가
 */
/*
// let wrong&variable&nameing = 42;

// 변수 소문자시작
let Person = 'jonas'; 
// 바뀌지 않을 숫자는 대문자로 표기, 프로그래밍 관례
// let PI = 3.141592; 
const PI = 3.141592; 
*/

/**
 * 변수이름을 서술적으로 하는 것이 더 깔끔한 코드를 만드는데 도움된,
 * 변수가 어떤 값을 가지는지 쉽게 알 수 있게 한다.
 */
/*
// 서술적 예시 
let myFirstJob = "Engineer";
let myCurrentJob = "Traveler"
// bad example
let job1 = "Programmer";
let job2 = "Traveler"


console.log(myFirstJob);
*/


/**
 * typeof
 * 연산자
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);
// console.log(typeof true);
// console.log(typeof(typeof true));
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "true");

javascriptIsFun = "True42"
console.log(javascriptIsFun)
console.log(typeof javascriptIsFun)

let year;
console.log(year);
console.log(typeof year);

year = 1984;
console.log(typeof year);

console.log(typeof null);
*/


/**
 * let const var
 * let
 *  변수의 값 변경 가능
 */

// let age =30;
// age = 31;

// const birthYear = 4242;
// birthYear = 2023;

// 초기화 필요
// const job;

/**
 * 현재는 var 사용 금지
 */
// var job = 'programer';
// job = 'teacher';

/**
 * 선언없이도 변수를 실행할 수 있다
 */
// lastName = "Im";
// console.log(lastName);


/**
 * 기본 연산자
 * 연산자란 기본적으로 값을 변환하거나 
 * 여러 값을 결합할 수 있게 해준다
 * 여러 카테고리가 있다
 *  수학 연산자, 비교 연산자, 논리 연산자, 할당 연산자
 */

/**
 * version 00
 * 연도가 바뀌면 동일한 값이었던 부분 다 바꾸어야해서 불편
 */
// const ageJake = 2042 - 1999;
// const ageMarie = 2042 - 2023;
// console.log(ageJake, ageMarie); // 43, 19

/**
 * version 01
 * 연도를 변수로 뺴내기
 */
// const currentYear = 2042
// const ageJake = currentYear - 1999;
// const ageMarie = currentYear - 2023;
// console.log(ageJake, ageMarie); // 43, 19

// console.log(ageJake * 2, ageMarie / 10, 2 ** 3); 

// const firstName = "Jake";
// const lastName = "Im";
// console.log(firstName + lastName);


/**
 *  결합될 문자열 사이에 공백 추가
 */

// const firstName = "Jake";
// const lastName = "Im";
// console.log(firstName + ' ' + lastName);


/**
 * 할당 연산자, 증감 연산자
 * =
 * 연산자 우선순위로 인하여 할당 연산자보다 + 연산자가 더 먼저  도앚ㄱ한다
 */

// let x = 42 + 5; // 47
// console.log(x); // 47
// x += 10; // x = x + 10 // 57
// x += 4; // x + x + 4  // 61
// x++; // 62
// x--; //61
// console.log(x); // 61


/**
 * 비교연산자
 * > < >= <=
 */

// console.log(ageJake > ageMarie);
// console.log(ageJake >= 18);

// const isFullAge = ageMarie >= 10;
// console.log(currentYear - 1999 > currentYear - 2018);

/**
 * 연산자 우선순위
 */
// const now = 2042;
// const ageJake = now - 2002;
// const ageMarie = now - 2000;

// console.log(now - 2002 > now - 2000);

/**
 * 연산자마다 진행 방향이 다르다
 * Left -> Right
 * Right -> left
 * 대체로는 Left-> Right가 많다
 * 대부분 수학 연산자는 Left -> Right
 */
// 왼쪽에서 오른쪽으로 진행
// console.log(25 - 10 - 5); // 10
// 만약 오른쪽에서 왼쪽으로 진행하면 달라지게 됨

/**
 * 할당 연산자는 오른쪽에서 왼쪽으로 진행된다.
 * x = y = 10
 * 1. y = 10
 * 2. x = 10
 * 왼쪽에서 오른쪽 순서로 할당 되었다면 이러한 결과는 생기지 못하였을 것이다
 * Left -> Right 였다면
 * 1. x = y // undeifned
 * 2. y = 10 // 10
 * result => undefined 10
 */
// let x, y; // undefined
// x = y = 25 - 10 -5; // x = y = 10
// console.log(x, y); // 10 10

/**
 * average age 구하기
 */
const now = 2042;
const ageJake = now - 2002;
const ageMarie = now - 2000;

const _averageAge = ageJake + ageMarie / 2 // wrong
const averageAge = (ageJake + ageMarie) / 2 // right
// console.log(`average age is ${(ageJake + ageMarie) / 2}`, _averageAge, averageAge)
console.log(ageJake, ageMarie, _averageAge, averageAge)
