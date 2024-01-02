import engine from '../log.js';
import { getRandomNumber, isPrime } from '../arithmetic-logic.js';

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const randomNumb = getRandomNumber(1, 100);
  const question = (`Question: ${randomNumb}`);
  let correctAnswer = isPrime(randomNumb);
  if (correctAnswer) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const array = [description, question, correctAnswer];
  return array;
};
engine(brainPrime);
export default brainPrime;
