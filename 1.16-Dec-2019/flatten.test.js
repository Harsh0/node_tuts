const flatten = require('./flatten');

test('flatten array test', () => {
    expect(flatten([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);
});