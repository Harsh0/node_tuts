const romanLiterals = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function convertIntToRoman(value) {
    if (isNaN(value)) return NaN;
    let roman = '';
    for (let romanLiteral in romanLiterals) {
        if (value >= romanLiterals[romanLiteral]) {
            let multiplier = Math.floor(value / romanLiterals[romanLiteral]);
            value -= multiplier * romanLiterals[romanLiteral];
            roman += romanLiteral.repeat(multiplier);
        }
    }
    if (value != 0) {
        throw new Error('Some error occured while executing program');
    }
    return roman;
}

module.exports = convertIntToRoman;