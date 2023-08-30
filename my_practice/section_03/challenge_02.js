'use strict';

const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300)
        return (bill / 100) * 15;
    return (bill / 100) * 20;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);

/**
 * Lecture
 */

const calcTip1 = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills0 = [125, 555, 44];
const tips0 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])];
console.log(tips);