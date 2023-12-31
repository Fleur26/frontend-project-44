import { getRandomNumber, gcd } from '../arithmetic-logic.js';
import log from '../log.js';

const brainGcd = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    const firstRandomNumber = getRandomNumber(1, 10);
    const secondRandomNumber = getRandomNumber(1, 10);
    const trueAnswer = gcd(firstRandomNumber, secondRandomNumber);
    const question = (`Question: ${firstRandomNumber} ${secondRandomNumber}`);

    array.push([question, trueAnswer]);
  }

  log('question..', array);
};

export default brainGcd;
