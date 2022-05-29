import ceasarCipher from "../src/ceasarCipher";

it('transform "text" to "whaw"', () => {
  expect(ceasarCipher("text")).toBe("whaw");
});

it('transform "a text!" to "d whaw!"', () => {
  expect(ceasarCipher("a text!")).toBe("d whaw!");
});

it('transform "Odin!" to "Rglq!"', () => {
  expect(ceasarCipher("Odin!")).toBe("Rglq!");
});
