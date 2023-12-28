import {
  winOrLoose, takePlayerAnswer, validateAnswer, resultOnScreen,
} from '../game-logic.js';
import { getRandomNumber } from '../arithmetic-logic.js';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May i have your name? ');
  console.log(`Hello, ${playerName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
  let countRightAnswers = 3;
  let playerDefeat = false;
  while (countRightAnswers > 0 && playerDefeat === false) {
    countRightAnswers -= 1;
    const randomNumb = getRandomNumber(1, 100);
    let isEven = randomNumb % 2 === 0;
    if (isEven) {
      isEven = 'yes';
    } else {
      isEven = 'no';
    }
    console.log(`Question: ${randomNumb}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    playerDefeat = validateAnswer(playerAnswer, isEven);
    resultOnScreen(playerDefeat, playerAnswer, isEven);
  }

  winOrLoose(playerDefeat, playerName);
};
export default evenGame;
