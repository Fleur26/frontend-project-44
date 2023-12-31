import log from '../log.js';
import { getRandomNumber, isPrime } from '../arithmetic-logic.js';

const brainPrime = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumb = getRandomNumber(1, 100);
    const question = (`Question: ${randomNumb}`);
    let rightAnswer = isPrime(randomNumb);
    if (rightAnswer) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    array.push([question, rightAnswer]);
  }
  log('Answer "yes" if given number is prime. Otherwise answer "no".', array);
};
export default brainPrime;
