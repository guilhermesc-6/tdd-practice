import calculator from "../src/caculator";

it("adds 2 + 2 to equal 4", () => {
  expect(calculator.add(2, 2)).toBe(4);
});

it("add: return a error not a number", () => {
  expect(calculator.add("w", "e")).toBe("is not a number");
});

it("sub 3 - 1 to equal 2", () => {
  expect(calculator.sub(3, 1)).toBe(2);
});

it("sub: return a error not a number", () => {
  expect(calculator.add("v", "e")).toBe("is not a number");
});

it("divide 4 / 2 to equal 2", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});

it("divide: return a error not a number", () => {
  expect(calculator.add("v", "e")).toBe("is not a number");
});

it("multiply 4 x 2 to equal 16", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});

it("multiply: return a error not a number", () => {
  expect(calculator.add("v", "e")).toBe("is not a number");
});
