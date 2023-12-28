import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer,
} from '../game-logic.js';
import { getRandomNumber } from '../arithmetic-logic.js';

const brainCalculator = () => {
  const playerName = gameGreeting('What is the result of the expression?');
  let countOfRightAnswer = 3;
  let playerAnswer = '';
  let countDefeat = 0;

  while (countOfRightAnswer > 0 && countDefeat === 0) {
    countOfRightAnswer -= 1;
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
    console.log(`Question: ${firstRandomNumb} ${operation} ${secondRandomNumb}`);
    playerAnswer = takePlayerAnswer('Your answer: ');
    countDefeat = validateAnswer(Number(playerAnswer), trueAnswer);
  }
  winOrLoose(countDefeat, playerName);
};

export default brainCalculator;
