const mocker = require('../mock');

test('Mock Function', () => {
    const mocker = jest.fn((name) => `Hello ${name}`);
    expect(mocker('Abbas')).toBe('Hello Abbas');
    expect(mocker('Ahmad')).toBe('Hello Ahmad');
    expect(mocker('Lama')).toBe('Hello Lama');
    expect(mocker).toHaveBeenCalled();
    expect(mocker).toHaveBeenCalledTimes(3);
    expect(mocker).toHaveBeenCalledWith('Lama');
    expect(mocker).toHaveBeenLastCalledWith('Lama');
});
