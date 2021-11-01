/**
 * @jest-environment jsdom
 */

 import AddCommand from './classes/AddCommand'
 import SubCommand from './classes/SubCommand'
 import MulCommand from './classes/MulCommand'
 import DivCommand from './classes/DivCommand'
 import PowCommand from './classes/PowCommand'
 import SquareCommand from './classes/SquareCommand'

test('Add 10 + 4 to equal 14', () => {
  expect(new AddCommand(10, 4).execute()).toBe(14);
});

test('Sub 10 - 4 to equal 6', () => {
  expect(new SubCommand(10, 4).execute()).toBe(6);
});

test('Mul 4 * 2 to equal 8', () => {
  expect(new MulCommand(4, 2).execute()).toBe(8);
});

test('Div 8 / 2 to equal 4', () => {
  expect(new DivCommand(8, 2).execute()).toBe(4);
});

test('num 2 ^ 4 to equal 16', () => {
  expect(new PowCommand(2, 4).execute()).toBe(16);
});

test('3√27 to equal 3', () => {
  expect(new SquareCommand(27, 3).execute()).toBe(3);
});
