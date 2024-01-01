import { getRandomNumber } from '../arithmetic-logic.js';
import log from '../log.js';
import { translateAnswer } from '../game-logic.js';

const evenGame = () => {
  const randomNumb = getRandomNumber(1, 100);
  let isEven = randomNumb % 2 === 0;
  isEven = translateAnswer(isEven);
  const question = (`Question: ${randomNumb}`);
  const trueAnswer = isEven;
  const array = [question, trueAnswer];
  return array;
};
log('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
export default evenGame;
