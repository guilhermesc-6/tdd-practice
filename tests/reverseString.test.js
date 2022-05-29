import reverseString from "../src/reverseString";

it('Should reverse "string"', () => {
  expect(reverseString("string")).toBe("gnirts");
});

it('Should reverse "123"', () => {
  expect(reverseString("123")).toBe("321");
});

it("Should return error", () => {
  expect(reverseString(123)).toBe("Error: enter a string value");
});
