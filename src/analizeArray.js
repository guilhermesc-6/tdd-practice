const analizeArray = (arr) => {
  let min;
  let max;
  let average = arr.reduce((prev, cur) => prev + cur);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "The value is not a number";
    }
    if (i === 0) {
      min = arr[i];
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return {
    average: Math.trunc(average / arr.length),
    min,
    max,
    length: arr.length,
  };
};

export default analizeArray;
