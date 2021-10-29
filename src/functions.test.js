/**
 * @jest-environment jsdom
 */

const functions = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(functions.getSum(1, 2)).toBe(3);
});

test('Sub 10 - 4 to equal 6', () => {
  expect(functions.getSub(10, 4)).toBe(6);
});

test('Mul 4 * 2 to equal 8', () => {
  expect(functions.getMul(4, 2)).toBe(8);
});

test('Div 8 / 2 to equal 4', () => {
  expect(functions.getDiv(8, 2)).toBe(4);
});

test('num 2 ^ 4 to equal 16', () => {
  expect(functions.getPow(2, 4)).toBe(16);
});

test('3√27 to equal 3', () => {
  expect(functions.getSquare(27, 3)).toBe(3);
});
