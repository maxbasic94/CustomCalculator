/**
 * @jest-environment jsdom
 */

const getSum = require('./app');

test('adds 1 + 2 to equal 3', () => {
  expect(getSum(1, 2)).toBe(3);
});