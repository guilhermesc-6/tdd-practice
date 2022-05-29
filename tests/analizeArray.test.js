import analizeArray from "../src/analizeArray";

it("analize [3,5,6,3,98,3]", () => {
  expect(analizeArray([3, 5, 6, 3, 98, 3])).toEqual({
    average: 19,
    min: 3,
    max: 98,
    length: 6,
  });
});

it("analize [0,4,8,2,6,3,8,6]", () => {
  expect(analizeArray([0, 4, 8, 2, 6, 3, 8, 6])).toEqual({
    average: 4,
    min: 0,
    max: 8,
    length: 8,
  });
});

it("analize [0,4,8,2,6,3,8,'6']", () => {
  expect(analizeArray([0, 4, 8, 2, 6, 3, 8, "6"])).toBe(
    "The value is not a number"
  );
});
