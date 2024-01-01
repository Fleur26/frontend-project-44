import { getRandomNumber } from '../arithmetic-logic.js';
import log from '../log.js';

const brainCalculator = () => {
  const firstRandomNumb = getRandomNumber(1, 10);
  const secondRandomNumb = getRandomNumber(1, 10);
  const arrayArithmeticOp = ['+', '-', '*'];
  let trueAnswer = 0;
  const index = getRandomNumber(0, 3);
  const operation = arrayArithmeticOp[index];
  switch (operation) {
    case '+':
      trueAnswer = firstRandomNumb + secondRandomNumb;
      break;
    case '-':
      trueAnswer = firstRandomNumb - secondRandomNumb;
      break;
    default:
      trueAnswer = firstRandomNumb * secondRandomNumb;
      break;
  }
  const question = (`Question: ${firstRandomNumb} ${operation} ${secondRandomNumb}`);
  const array = [question, trueAnswer];
  return array;
};
log('What is the result of the expression?)', brainCalculator);
export default brainCalculator;
