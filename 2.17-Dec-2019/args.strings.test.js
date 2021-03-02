const argsString = require('./args-strings');

test('test arg string', () => {
    expect(argsString('{} {}', ['Hello', 'World!'])).toBe('Hello World!');
    expect(argsString('How are you?', ['Hey', 'what'])).toBe('How are you?');
});