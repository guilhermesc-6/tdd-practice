import capitalize from "../src/capitalize";

test("Should capitalize 'capital'", () => {
  expect(capitalize("capital")).toBe("Capital");
});

it("Should return 'Perfect'", () => {
  expect(capitalize("PERFECT")).toBe("Perfect");
});

it('Should return "Three words"', () => {
  expect(capitalize("three words")).toBe("Three words");
});

it("Should return 'enter a valid string'", () => {
  expect(capitalize("123")).toBe("enter a valid string");
});

it("Should return 'enter a valid string'", () => {
  expect(capitalize(123)).toBe("enter a valid string");
});
