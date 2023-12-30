import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen,
} from '../game-logic.js';
import { getRandomNumber, gcd } from '../arithmetic-logic.js';
import log from '../log.js';

const brainGcd = () => {
  log('Find the greatest common divisor of given numbers.');
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const trueAnswer = gcd(firstRandomNumber, secondRandomNumber);
    console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
    return(trueAnswer);
};

export default brainGcd;
