const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0
};
const operations = {
  minus: (a, b) => a - b,
  plus: (a, b) => a + b,
  times: (a, b) => a * b,
  divided_by: (a, b) => a / b
};
const secondArgumentHandler = {
  get: function(target, prop) {
    if (prop in numbers) {
      const b = numbers[prop];
      return target.operation(target.a, b);
    } else {
      throw new Error("Invalid Parameter passed as second argument");
    }
  }
};
const operationHandler = {
  get: function(target, prop) {
    if (prop in operations) {
      return new Proxy(
        {
          a: target.a,
          operation: operations[prop]
        },
        secondArgumentHandler
      );
    } else {
      throw new Error("Invalid Parameter passed as operation");
    }
  }
};
const firstArgumentHandler = {
  get: function({}, prop) {
    if (prop in numbers) {
      return new Proxy(
        {
          a: numbers[prop]
        },
        operationHandler
      );
    } else {
      throw new Error("Invalid Parameter passed as first argument");
    }
  }
};
calcHandler = {
  get: function({}, prop) {
    if (prop === "new") {
      return new Proxy({}, firstArgumentHandler);
    } else {
      throw new Error("Calc should be initialised using cClc.new");
    }
  }
};
const Calc = new Proxy({}, calcHandler);

module.exports = Calc
console.log(Calc.new.two.plus.one);
// console.log(Calc.new.two.plus.two);
// console.log(Calc.new.two.minus.one);
// console.log(Calc.new.one.plus.two);
// console.log(Calc.new.five.minus.six);
// console.log(Calc.new.seven.times.two);
// console.log(Calc.new.nine.divided_by.three);
// console.log(Calc.new.nine.divided_by.zero);

// //Invalids
// console.log(Calc.new.one.divided_by.ten);
