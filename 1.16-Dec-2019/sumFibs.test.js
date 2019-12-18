const sumFibs = require('./sumFibs');

test('sum of fib less than 10', () => {
    expect(sumFibs(10)).toBe(10);
});

test('sum of fib for multiple values', () => {
    expect(sumFibs(13)).toBe(23);
});