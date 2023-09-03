function printForecase(temperatures) {
  let str = "";
  for (let idx = 0; idx < temperatures.length; idx++) {
    str += `... ${temperatures[idx]}C in ${idx + 1} days`;
  }
  console.log(`${str} ... `);
}

printForecase([17, 21, 23, -5, 4, 42]);
