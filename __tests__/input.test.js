const theFilter = require('../input');

describe('Validate the input field', () => {
    test(`Check if name is empty`, () => {
        expect(theFilter()).toBe('Unknown');
    });
    test(`Check for spaces (start + end)`, () => {
        expect(theFilter('Abbas ')).toBe('Abbas');
    });
    test(`Check if name length > 10 chars`, () => {
        expect(theFilter('Abbas_Hussein_Ghaith')).toBe('Abbas_Huss');
    });
    test(`Check if name not starts with underscore`, () => {
        expect(theFilter('_Abbas')).toBe('Abbas');
    });
});
