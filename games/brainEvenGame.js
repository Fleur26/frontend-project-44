import {
  winOrLoose, takePlayerAnswer, outputToScreen, validateAnswer,
} from '../src/game-logic.js';
import { getRandomNumber } from '../src/arithmetic-logic.js';

const evenGame = () => {
  outputToScreen('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May i have your name? ');
  outputToScreen(`Hello, ${playerName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  const countRightAnswers = 3;
  let countAnswersPlayer = 0;
  let playerDefeat = 0;
  const rightAnswer = 'yes or no';
  while (countAnswersPlayer < countRightAnswers && playerDefeat !== 1) {
    countAnswersPlayer += 1;
    const randomNumb = getRandomNumber(1, 100);
    let isEven = randomNumb % 2 === 0;
    if (isEven) {
      isEven = 'yes';
    } else {
      isEven = 'no';
    }
    outputToScreen(`Question: ${randomNumb}`);
    const playerAnswer = takePlayerAnswer();
    switch (playerAnswer) {
      case 'yes':
        validateAnswer(playerAnswer, isEven, playerName);
        break;
      case 'no':
        validateAnswer(playerAnswer, isEven, playerName);
        break;
      default:
        validateAnswer(playerAnswer, rightAnswer, playerName);
        playerDefeat += 1;
        break;
    }
  }

  winOrLoose(playerDefeat, playerName);
};
export default evenGame;
