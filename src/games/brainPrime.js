import engine from '../engine.js';
import { getRandomNumber, isPrime } from '../arithmetic-logic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const brainPrime = () => {
  const randomNumb = getRandomNumber(1, 100);
  const question = (`Question: ${randomNumb}`);
  const correctAnswer = isPrime(randomNumb) ? 'yes' : 'no';
  const array = [description, question, correctAnswer];
  return array;
};

export default engine(brainPrime);
