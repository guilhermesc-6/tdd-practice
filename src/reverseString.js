const reverseString = (string) => {
  if (typeof string !== "string") {
    return "Error: enter a string value";
  }
  let word = string.slice("");
  let newString = [];
  for (let i = word.length - 1; i >= 0; i--) {
    newString.push(word[i]);
  }
  return newString.join("");
};

// console.log(reverseString("test"));
export default reverseString;
