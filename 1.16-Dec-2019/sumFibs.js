function sumFibs(num) {
    if (num < 1) {
        return 0;
    }
    if (num == 1) {
        return 1;
    }
    let fibo = [1, 1];
    let i = 0;
    let count = 2;
    while (fibo[fibo.length - 1] < num) {
        fibo.push(fibo[fibo.length - 1] + fibo[fibo.length - 2]);
        if (fibo[fibo.length - 1] % 2 == 1 && fibo[fibo.length - 1] <= num) {
            count += fibo[fibo.length - 1];
        }
    }
    return count;
}

module.exports = sumFibs;