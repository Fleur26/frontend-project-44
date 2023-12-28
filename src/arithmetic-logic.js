const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gcd = (x, y) => {
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
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
export { gcd, getRandomNumber, isPrime };
