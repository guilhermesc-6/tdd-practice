const calculator = (() => {
  const isNumber = (value) => {
    return typeof value === "number" ? true : false;
  };
  const add = (x, y) => {
    if (isNumber(x) && isNumber(y)) {
      return x + y;
    }
    return "is not a number";
  };

  const sub = (x, y) => {
    if (isNumber(x) && isNumber(y)) {
      return x - y;
    }
    return "is not a number";
  };

  const divide = (x, y) => {
    if (isNumber(x) && isNumber(y)) {
      return x / y;
    }
    return "is not a number";
  };

  const multiply = (x, y) => {
    if (isNumber(x) && isNumber(y)) {
      return x * y;
    }
    return "is not a number";
  };

  return { add, sub, divide, multiply };
})();

export default calculator;
