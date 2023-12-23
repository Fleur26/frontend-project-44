const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const Gcd = (x, y) => {
  let firstNumb = x;
  let secondNumb = y;
  while (firstNumb > 0 && secondNumb > 0) {
    if (firstNumb > secondNumb) {
      firstNumb %= secondNumb;
    } else {
      secondNumb %= firstNumb;
    }
  }
  let result = 0;
  if (firstNumb === 0) {
    result = secondNumb;
  } else {
    result = firstNumb;
  }
  return result;
};
export { Gcd, getRandomNumber };
