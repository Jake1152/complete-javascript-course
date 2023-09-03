"strict mode";

const calcTemplAmplitute = function (temps) {
  let max = temps[0];
  let min = temps[0];
  //   sum = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (temps[i] > max) max = curTemp;
    if (temps[i] > min) min = curTemp;
  }
  console.log(max);
  return max - min;
};
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const amplitude = calcTemplAmplitute(temperatures);
console.log(amplitude);
// max = 3
// max = 7

/**
 * PROBLEM 2
 * 인자로 2개를 받을때
 */
// const calcTemplAmplitute = function (temps1, temps2) {
