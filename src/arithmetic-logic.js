export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
export const gcd = (x, y) => {
  if (y === 0) {
    return x;
  }
  return gcd(y, x % y);
};
export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};
