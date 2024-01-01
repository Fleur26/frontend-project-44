import { getRandomNumber, gcd } from '../arithmetic-logic.js';
import log from '../log.js';

const brainGcd = () => {
    const firstRandomNumber = getRandomNumber(1, 10);
    const secondRandomNumber = getRandomNumber(1, 10);
    const trueAnswer = gcd(firstRandomNumber, secondRandomNumber);
    const question = (`Question: ${firstRandomNumber} ${secondRandomNumber}`);

    const array = [question, trueAnswer];
    return array;
};
log('Find the greatest common divisor of given numbers.', brainGcd);

export default brainGcd;
