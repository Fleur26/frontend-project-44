import {
  winOrLoose, takePlayerAnswer, outputToScreen, validateAnswer,
} from '../game-logic.js';
import { getRandomNumber } from '../arithmetic-logic.js';

const evenGame = () => {
  outputToScreen('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May i have your name? ');
  outputToScreen(`Hello, ${playerName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  const countRightAnswers = 3;
  let countAnswersPlayer = 0;
  let playerDefeat = 0;
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
    const playerAnswer = takePlayerAnswer('Your answer: ');
    playerDefeat += validateAnswer(playerAnswer, isEven);
  }

  winOrLoose(playerDefeat, playerName);
};
export default evenGame;
