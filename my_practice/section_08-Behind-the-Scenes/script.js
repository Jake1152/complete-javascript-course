'use strict';

/**
 * Variable scope
 */
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  // firstName을 찾기 위해 상위 범위 확인
  //   console.log(firstName);
  // error lastName은 존재하지 않음
  //   console.log(lastName);
  function printAge() {
    let output = `You ar ${age}, born in ${birthYear}`;
    console.log(output);

    // block scope
    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   let millenial = true;
      const firstName = 'Steven';
      output = 'NEW OUTOUT';

      const str = `Oh, and you a millenial, ${firstName}`;
      console.log(str);

      /**
       * 함수는 블록 스코프이고
       * 이것을 증명하는 것은 strict모드라서 가능하다
       */
      function add(a, b) {
        return a + b;
      }

      //   const output = 'NEW OUTPUT!';
      //   add
    }
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jake';
calcAge(1991);
