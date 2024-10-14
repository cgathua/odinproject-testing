const capitalize = require('./capitalize');

describe('capitalize', () => {
    test('a string with the first character capitalized', () => {
        expect(capitalize('First Name')).toEqual('First name');
    });

    test('word with first character capitalized', () => {
        expect(capitalize('america')).toEqual('America');
    });
});