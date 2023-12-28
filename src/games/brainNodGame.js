import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer,
} from '../game-logic.js';
import { getRandomNumber, gcd } from '../arithmetic-logic.js';

const brainGcd = () => {
  const playerName = gameGreeting('Find the greatest common divisor of given numbers.');
  let countPlayerDefeat = 0;
  let countAnswersPlayer = 3;
  while (countAnswersPlayer > 0 && countPlayerDefeat === 0) {
    countAnswersPlayer -= 1;
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const trueAnswer = gcd(firstRandomNumber, secondRandomNumber);
    console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    countPlayerDefeat += validateAnswer(Number(playerAnswer), trueAnswer, playerName);
  }
  winOrLoose(countPlayerDefeat, playerName);
};

export default brainGcd;
