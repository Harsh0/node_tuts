const without = require('./without');

test('without', () => {
    expect(without([1, 2], [1, 2, 1, 4, 5])).toEqual([4, 5]);
    expect(without([0], [-0]).length).toBe(1);
    expect(without([1, 2], [1, 2, 1, 3, 4])).toEqual([3, 4]);
});