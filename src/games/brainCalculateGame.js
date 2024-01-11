import { getRandomNumber } from '../arithmetic-logic.js';
import engine from '../engine.js';

const arithmeticOperations = ['+', '-', '*'];
const calculator = (index, firstNumb, secondNumb) => {
  const operation = arithmeticOperations[index];
  let correctAnswer = 0;
  switch (operation) {
    case '+':
      correctAnswer = firstNumb + secondNumb;
      break;
    case '-':
      correctAnswer = firstNumb - secondNumb;
      break;
    case '*':
      correctAnswer = firstNumb * secondNumb;
      break;
    default:
      console.log('error');
      break;
  }
  return correctAnswer;
};
const description = 'What is the result of the expression?';
const brainCalculator = () => {
  const firstRandomNumb = getRandomNumber(1, 10);
  const secondRandomNumb = getRandomNumber(1, 10);
  const index = getRandomNumber(0, arithmeticOperations.length);
  const correctAnswer = calculator(index, firstRandomNumb, secondRandomNumb);
  const question = (`Question: ${firstRandomNumb} ${arithmeticOperations[index]} ${secondRandomNumb}`);
  const array = [question, String(correctAnswer)];
  return array;
};

export default engine(description, brainCalculator);
