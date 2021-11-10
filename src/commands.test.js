/**
 * @jest-environment jsdom
 */

 import AddCommand from './commands/AddCommand'
 import SubCommand from './commands/SubCommand'
 import MulCommand from './commands/MulCommand'
 import DivCommand from './commands/DivCommand'
 import PowCommand from './commands/PowCommand'
 import RootCommand from './commands/RootCommand'
 import PercentCommand from './commands/PercentCommand'
 import OneDivByNumCommand from './commands/OneDivByNumCommand'
 import ExpCommand from './commands/ExpCommand';
 import ExpByPowerCommand from './commands/ExpByPowerCommand'
 import LnCommand from './commands/LnCommand'
 import LogCommand from './commands/LogCommand'

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

test('4√81 to equal 3', () => {
  expect(new RootCommand(81, 4).execute()).toBe(3);
});

test('58% to equal 0.58', () => {
  expect(new PercentCommand(58).execute()).toBe(0.58);
});

test('1 / 5 to equal 0.2', () => {
  expect(new OneDivByNumCommand(5).execute()).toBe(0.2);
});

test('click on button to equal 2.718281828459045', () => {
  expect(new ExpCommand().execute()).toBe(2.718281828459045);
});

test('exp on power 2 to equal 7.3890560989306495', () => {
  expect(new ExpByPowerCommand(2).execute()).toBe(7.3890560989306495);
});

test('ln(exp) to equal 1', () => {
  expect(new LnCommand(2.718281828459045).execute()).toBe(1);
});

test('log(100) to equal 2', () => {
  expect(new LogCommand(100).execute()).toBe(2);
});



