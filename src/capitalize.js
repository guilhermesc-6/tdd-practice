const capitalize = (word) => {
  if (typeof word !== "string" || word.match(/[0-9]/)) {
    return "enter a valid string";
  }
  let string = word.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default capitalize;
