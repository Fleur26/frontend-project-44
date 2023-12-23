import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, outputToScreen,
} from '../src/game-logic.js';
import { getRandomNumber } from '../src/arithmetic-logic.js';

const brainCalculator = () => {
  const playerName = gameGreeting('What is the result of the expression?');
  const countOfRightAnswer = 3;
  let playerAnswer = '';
  let countDefeat = 0;
  let countAnswersPlayer = 0;
  while (countAnswersPlayer < countOfRightAnswer && countDefeat !== 1) {
    countAnswersPlayer += 1;
    const firstRandomNumb = getRandomNumber(1, 10);
    const secondRandomNumb = getRandomNumber(1, 10);
    const indexOfArithmeticOp = getRandomNumber(1, 4);
    let trueAnswer = 0;
    switch (indexOfArithmeticOp) {
      case 1:
        trueAnswer = firstRandomNumb + secondRandomNumb;
        outputToScreen(`Question: ${firstRandomNumb} + ${secondRandomNumb}`);
        playerAnswer = takePlayerAnswer('Your answer: ');
        countDefeat += validateAnswer(Number(playerAnswer), trueAnswer, playerName);
        break;
      case 2:
        if (firstRandomNumb > secondRandomNumb) {
          trueAnswer = firstRandomNumb - secondRandomNumb;
          outputToScreen(`Question: ${firstRandomNumb} - ${secondRandomNumb}`);
          playerAnswer = takePlayerAnswer('Your answer: ');
          countDefeat = validateAnswer(Number(playerAnswer), trueAnswer, playerName);
        } else {
          trueAnswer = secondRandomNumb - firstRandomNumb;
          outputToScreen(`Question: ${secondRandomNumb} - ${firstRandomNumb}`);
          playerAnswer = takePlayerAnswer('Your answer: ');
          countDefeat += validateAnswer(Number(playerAnswer), trueAnswer, playerName);
        }
        break;
      case 3:
        trueAnswer = firstRandomNumb * secondRandomNumb;
        outputToScreen(`Question: ${firstRandomNumb} * ${secondRandomNumb}`);
        playerAnswer = takePlayerAnswer('Your answer: ');
        countDefeat += validateAnswer(Number(playerAnswer), trueAnswer, playerName);
        break;
      default:
        break;
    }
  }
  winOrLoose(countDefeat, playerName);
};

export default brainCalculator;
