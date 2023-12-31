import { getRandomNumber } from '../arithmetic-logic.js';
import log from '../log.js';

const brainCalculator = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
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
    array.push([question, trueAnswer]);
  }
  log('What is the result of the expression?)', array);
};

export default brainCalculator;
