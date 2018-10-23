Calc = require("./fluentCalc");

test("adds two numbers correctly", () => {
  expect(Calc.new.two.plus.one).toEqual(3);
});

test("adding 1 and 1 does not equal to any value other than 2 numbers ", () => {
  expect(Calc.new.one.plus.one).not.toBe(3);
});

test("subtracts two numbers correctly", () => {
  expect(Calc.new.five.minus.six).toEqual(-1);
});

test("multiplies two numbers correctly", () => {
  expect(Calc.new.seven.times.two).toEqual(14);
});


test("divides two numbers correctly", () => {
  expect(Calc.new.nine.divided_by.three).toEqual(3);
});
