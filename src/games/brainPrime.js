import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen,
} from '../game-logic.js';
import { getRandomNumber, isPrime } from '../arithmetic-logic.js';

const brainPrime = () => {
  const playerName = gameGreeting('Answer "yes" if given number is prime. Otherwise answer "no".');
  let countRightAnswers = 3;
  let defeatCount = false;
  let randomNumb = 0;
  while (countRightAnswers > 0 && defeatCount === false) {
    countRightAnswers -= 1;
    randomNumb = getRandomNumber(1, 100);
    console.log(`Question: ${randomNumb}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    let rightAnswer = isPrime(randomNumb);
    if (rightAnswer) {
      rightAnswer = 'yes';
    } else {
      rightAnswer = 'no';
    }
    defeatCount = validateAnswer(playerAnswer, rightAnswer);
    resultOnScreen(defeatCount, playerAnswer, rightAnswer);
  }
  winOrLoose(defeatCount, playerName);
};
export default brainPrime;
