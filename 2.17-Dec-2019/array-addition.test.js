const arrayAddition = require('./array-addition');

test('should return addition of 2 arrays as a separate array', () => {
    expect(arrayAddition([-1, -2, -3, -4], [1, 2, 3, 4])).toEqual([0, 0, 0, 0]);
});

test('should return addition of 2 arrays as a separate array', () => {
    expect(arrayAddition([0, 0, 0, 0], [1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('should return addition of 2 arrays as a separate array of the length of the bigger array', () => {
    expect(arrayAddition([0, 1, 0, 4], [100, -200, 200, 400, 0, 99999])).toEqual([100, -199, 200, 404, 0, 99999]);
});

test('should throw if one of the array is empty', () => {
    expect(() => arrayAddition([], [100, -200, 200, 400, 0, 99999])).toThrow();
});

test('should throw if parameters are not arrays', () => {
    expect(() => arrayAddition('a', [100, -200, 200, 400, 0, 99999])).toThrow();
});

test('should throw if parameters are not arrays', () => {
    expect(() => arrayAddition('a', 1)).toThrow();
});

test('should throw error on non strictly numerical arrays', () => {
    expect(() => arrayAddition(['1', '2', '3', '4'], [2, 'b', 'c'])).toThrow();
});