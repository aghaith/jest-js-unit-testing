const allData = require('../all');

test('Chech if array contains 6 elements 1st method', () => {
    expect(allData.length).toBe(6);
});

test('Check if array contains 6 elements 2nd method', () => {
    expect('Abbasg').toHaveLength(6);
});

test('Check if array contains number 3', () => {
    expect(allData).toContain(3);
});

test('Check if array not contains number 6', () => {
    expect(allData).not.toContain(6);
});

test('Check if array not contains number zero', () => {
    for (let i = 0; i < allData.length; i++) { 
        expect(allData[i]).not.toBe(0);
    }
});

test('Check if array not contains only numbers 1st method', () => {
    for (let i = 0; i < allData.length; i++) { 
        expect(isNaN(allData[i])).toBe(false);
    }
});

test('Check if array not contains only numbers 2nd method', () => {
    for (let i = 0; i < allData.length; i++) { 
        expect(isNaN(allData[i])).toBeFalsy();
    }
});

test('Check if array not contains only numbers 3rd method', () => {
    for (let i = 0; i < allData.length; i++) { 
        expect(isNaN(allData[i])).not.toBeTruthy();
    }
});

// test('Check if array first is larger than 1', () => {
//     expect(allData[0]).toBeGreaterThan(1);
// });

test('Check if array first element is larger than 1', () => {
    expect(allData[0]).toBeGreaterThanOrEqual(1);
});

// test('Check if array first element is less than 5', () => {
//     expect(allData[0]).toBeLessThan(5);
// });

test('Check if array first element is less than 5', () => {
    expect(allData[0]).toBeLessThanOrEqual(5);
});

test('Check for undefined', () => {
    let a;
    expect(a).toBeUndefined();
});

test('Check for substring inside string by RegExp', () => {
    let myString = 'I love meta';
    expect(myString).toMatch(/meta/);
});

test('Check for property age', () => {
    let myObject = {
        name: 'Abbas',
        age: 27,
    }
    expect(myObject).toHaveProperty('age');
});

test('Check for property age value is 28', () => {
    let myObject = {
        name: 'Abbas',
        age: 28,
    }
    expect(myObject).toHaveProperty('age', 28);
});

expect.extend({
    toBeLargerThan(received, target) {
        const pass = received > target;
        if (pass) {
            return {
                message: () => `Expected ${received} to be larger than ${target}`,
                pass: true
            }
        } else {
            return {
                message: () => `Error: Expected ${received} to be larger than ${target}`,
                pass: false
            }
        }
    }
});

test('Check if number is larger than other number', () => {
    expect(10).toBeLargerThan(8);
});

expect.extend({
    toBeBetween(received, start, end) {
        const pass = received > start && received < end;
        if (pass) {
            return {
                message: () => `Expected ${received} to be between ${start} and ${end}`,
                pass: true,
            }
        } else {
            return {
                message: () => `Expected ${received} to be between ${start} and ${end}`,
                pass: false,
            }
        }
    }
});

test('Check if year is between years range', () => {
    expect(1995).toBeBetween(1990, 2022);
});

// expect.anything() => anything except undefined & null

test('Expect anything', () => {
    let x = 'A';
    expect('Abbas').toEqual(expect.anything());
    expect(1).toEqual(expect.anything());
    expect([1, 2, 3, 4]).toEqual(expect.anything());
    expect(x).toEqual(expect.anything());
});

// expect.any(Constructor)

test('Expect any constructor', () => {
    expect('Abbas').toEqual(expect.any(String));
});

// expect.arrayContaining(Constructor)

test('Expect array to be found in the main array', () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(myArray).toEqual(expect.arrayContaining([5, 3, 4]));
});