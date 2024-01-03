import { getRandomNumber, gcd } from '../arithmetic-logic.js';
import engine from '../engine.js';

const description = 'Find the greatest common divisor of given numbers.';
const brainGcd = () => {
  const firstRandomNumber = getRandomNumber(1, 10);
  const secondRandomNumber = getRandomNumber(1, 10);
  const correctAnswer = gcd(firstRandomNumber, secondRandomNumber);
  const question = (`Question: ${firstRandomNumber} ${secondRandomNumber}`);

  const array = [description, question, String(correctAnswer)];
  return array;
};

export default engine(brainGcd);
