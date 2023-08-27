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

let age =30;
age = 31;

const birthYear = 4242;
// birthYear = 2023;

// 초기화 필요
// const job;

/**
 * 현재는 var 사용 금지
 */
var job = 'programer';
job = 'teacher';

/**
 * 선언없이도 변수를 실행할 수 있다
 */
lastName = "Im";
console.log(lastName);