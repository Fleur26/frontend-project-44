import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen,
} from '../game-logic.js';
import { getRandomNumber, gcd } from '../arithmetic-logic.js';

const brainGcd = () => {
  const playerName = gameGreeting('Find the greatest common divisor of given numbers.');
  let countPlayerDefeat = false;
  let countAnswersPlayer = 3;
  while (countAnswersPlayer > 0 && countPlayerDefeat === false) {
    countAnswersPlayer -= 1;
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const trueAnswer = gcd(firstRandomNumber, secondRandomNumber);
    console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    countPlayerDefeat = validateAnswer(Number(playerAnswer), trueAnswer, playerName);
    resultOnScreen(countPlayerDefeat, playerAnswer, trueAnswer);
  }
  winOrLoose(countPlayerDefeat, playerName);
};

export default brainGcd;
