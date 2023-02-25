/*
    theSum Function
    [1] Return 0 if no number passed
    [2] Return the number if only the number passed
    [3] if there is 2 numbers it add numbers 1 + 2
    [4] if there is 3 numbers it add numbers 1 + 2 + 3
    [5] if you have any number of numbers it will sum all the numbers
*/

const theSum = (...numbers) => numbers.reduce((pv,cv) => pv + cv, 0);

module.exports = theSum;
