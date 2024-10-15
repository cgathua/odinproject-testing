const calculator = require('./calculator');

describe('add', () => {
	test('adds 3 plus 3', () => {
		expect(calculator.add(3, 3)).toBe(6);
	});
});

describe('subtract', () => {
	test('subtract 4 from 9', () => {
		expect(calculator.subtract(9, 4)).toBe(5);
	});
});

describe('divide', () => {
	test('divide two numbers', () => {
		expect(calculator.divide(12, 6)).toBe(2);
	});
});

describe('mulitiply', () => {
	test('multiply two numbers', () => {
		expect(calculator.multiply(3, 3)).toBe(9);
	});
});