const ceasarCipher = (str) => {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  let newStr = str.split("");
  let carac = [" ", ".", "!", "?"];
  let word = [];
  for (let i = 0; i < newStr.length; i++) {
    for (let a = 0; a < alpha.length; a++) {
      if (newStr[i].toLowerCase() === alpha[a]) {
        if (newStr[i] === newStr[i].toUpperCase()) {
          word.push(alpha[(a + 3) % 26].toUpperCase());
          continue;
        }
        word.push(alpha[(a + 3) % 26]);
      }
    }
    if (carac.includes(newStr[i])) {
      word.push(newStr[i]);
    }
  }
  return word.join("");
};

console.log(ceasarCipher("Guilherme!"));
export default ceasarCipher;
