const myFunctions = require("./app");

test('adds 1 + 2 to equal 3', () => {
    expect(myFunctions.getSum(1, 2)).toBe(3);
});