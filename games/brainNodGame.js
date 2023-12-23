import {
  Gcd, gameGreeting, getRandomNumber, takePlayerAnswer, validateAnswer, outputToScreen,
} from '../src/game-logic.js';

const brainGcd = () => {
  const playerName = gameGreeting('Find the greatest common divisor of given numbers.');
  let countPlayerDefeat = 0;
  let countAnswersPlayer = 3;
  while (countAnswersPlayer > 0 && countPlayerDefeat === 0) {
    countAnswersPlayer -= 1;
    const firstRandomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const trueAnswer = Gcd(firstRandomNumber, secondRandomNumber);
    console.log(trueAnswer);
    outputToScreen(`Question: ${firstRandomNumber}  ${secondRandomNumber}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    countPlayerDefeat += validateAnswer(Number(playerAnswer), trueAnswer, playerName);
  }
  if (countPlayerDefeat === 0) {
    outputToScreen('Congratulations');
  }
};

export default brainGcd;
