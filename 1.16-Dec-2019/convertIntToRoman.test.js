const convertIntToRoman = require('./convertIntToRoman');

test('convert integer value to roman', () => {
    expect(convertIntToRoman(12)).toBe('XII');
    expect(convertIntToRoman(3567)).toBe('MMMDLXVII');
    expect(convertIntToRoman(1309)).toBe('MCCCIX');
    expect(convertIntToRoman(983)).toBe('CMLXXXIII');
    expect(convertIntToRoman(123)).toBe('CXXIII');
});

test('convert 0 value to roman', () => {
    expect(convertIntToRoman(0)).toBe('');
});

test('non integer value to roman', () => {
    expect(convertIntToRoman('Value')).toBe(NaN);
});