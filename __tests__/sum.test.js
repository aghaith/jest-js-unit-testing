const theSum = require('../sum');

// test(name, fn, timeout)
// it(name, fn, timeout)
// describe(name, fn)

describe('Check the numbers sum total', () => {
    describe.only('Check if no numbers or only one number', () => {
        test('Return 0 if no number', () => {
            expect(theSum()).toBe(0);
        });
    
        test('Return the number', () => {
            expect(theSum(10)).toBe(10);
        });
    });
    describe.skip('If more than one number', () => {
        test.only('Return the number 1 + Number 2', () => {
            expect(theSum(15, 25)).toBe(40);
        });

        test('Return the number 1 + Number 2 + Number 3', () => {
            expect(theSum(10, 20, 30)).toBe(60);
        });

        test.skip('Return the number 1 + Number 2 + Number 3+ Number 4', () => {
            expect(theSum(10, 20, 30, 10)).toBe(70);
        });

        test('Return the sum result of all number', () => {
            expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
        });
    });
});

console.log([].reduce((a, b) => a + b, 1));
