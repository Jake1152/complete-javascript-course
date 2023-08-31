// BMI = mass / (height * height)
// massMark = 780000
// heightMark = 169
// massJohn = 920000 
// heightJohn = 192

/**
 * 처음에 위에 처럼 변수 키워드 없이 작성 
 * 그로 인해 global이라서 에러 발생
 * 변수 앞에 적절한 키워드 사용 필요
 */
const massMark = 78
const heightMark = 1.69
const massJohn = 92
const heightJohn = 1.92

function bmiFormula(mass, height) {
    return (mass / (height * height));
}

const BMIMark = bmiFormula(massMark, heightMark);
const BMIJohn = bmiFormula(massJohn, heightJohn);

console.log(`Mark BMI : ${BMIMark}`);
console.log(`John BMI  : ${BMIJohn}`);