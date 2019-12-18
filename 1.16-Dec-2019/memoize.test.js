const memoize = require('./memoize');

function expensiveOperation() {
    console.log('expensiveOperation function is called!');
    return 22;
}

function multiplyOperation(...args) {
    console.log('multiplyOperation function is called!');
    return args.reduce((previous, current) => previous * current, 1);
}

function addOperation(...args) {
    console.log('addOperation function is called!');
    return args.reduce((previous, current) => previous + current, 0);
}

test('memoize expensive operation function', () => {
    const memoized = memoize(expensiveOperation); // <- memoize function
    expect(memoized()).toBe(22);
    expect(memoized()).toBe(22);
});

test('memoize multiply operation function', () => {
    const memoized = memoize(multiplyOperation, 10, 20); // <- memoize function
    expect(memoized()).toBe(200);
    expect(memoized()).toBe(200);
});

test('memoize add operation function', () => {
    const memoized = memoize(addOperation, 56, 32, 94); // <- memoize function
    expect(memoized()).toBe(182);
    expect(memoized()).toBe(182);
});

test('memoize multiple operation function', () => {
    const memoizedAdd = memoize(addOperation); // <- memoize function
    const memoizedMulitply = memoize(multiplyOperation); // <- memoize function
    const memoizedExpensive = memoize(expensiveOperation); // <- memoize function
    expect(memoizedAdd()).toBe(182);
    expect(memoizedMulitply()).toBe(200);
    expect(memoizedExpensive()).toBe(22);
    expect(memoizedAdd()).toBe(182);
    expect(memoizedMulitply()).toBe(200);
    expect(memoizedExpensive()).toBe(22);
});

