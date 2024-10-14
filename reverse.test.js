const reverseString = require('./reverse');

describe('reverseString', () => {
    test('reverses one word', () => {
        expect(reverseString('name')).toEqual('eman');
    });

    test('reverses two words', () => {
        expect(reverseString('first name')).toEqual('eman tsrif')
    })
});
