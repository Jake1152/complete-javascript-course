/**
 * strict모드를 씀으로써 엄격하게 관리
 * 1. 특정 작업을 금지
 * 2. 특정 상황에서 눈에 보이는 오류를 만든다.
 * strict모드가 아니었다면 자바스크립트는 실수 했다는 것을 알려주지 않고 그냥 진행할것이다
 */
'use strict';

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :)');

// const interface = "Audio";
const private = 4242;