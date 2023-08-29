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
function logger() {
    console.log("My name is Jake");
}
/**
 * calling / running / invoking function
 */
console.log(logger(), typeof logger());
// logger();
// logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} organgs.`
    return juice;
}

const appleJuice = fruitProcessor("5", "0");
console.log(appleJuice);
// console.log(fruitProcessor("5", "0"));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
// 역시 함수
const num = Number('23');