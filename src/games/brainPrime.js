import log from '../log.js';
import { getRandomNumber, isPrime } from '../arithmetic-logic.js';
import { translateAnswer } from '../game-logic.js';

const brainPrime = () => {
    const randomNumb = getRandomNumber(1, 100);
    const question = (`Question: ${randomNumb}`);
    let rightAnswer = isPrime(randomNumb);
    rightAnswer = translateAnswer(rightAnswer);
    const array = [question, rightAnswer];
    return array;
};
log('Answer "yes" if given number is prime. Otherwise answer "no".', brainPrime);
export default brainPrime;
