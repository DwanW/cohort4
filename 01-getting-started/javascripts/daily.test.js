import functions from './daily';

test('is my converter working?', () => {
    expect(functions.convertToFahrenheit(0)).toBe(32);
    expect(functions.convertToFahrenheit(5)).toBe(41);
}) 