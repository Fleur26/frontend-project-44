import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen,
} from '../game-logic.js';
import { getRandomNumber } from '../arithmetic-logic.js';

const brainProgression = () => {
  const playerName = gameGreeting('What number is missing in the progression?');
  let defeatCount = false;
  let countOfRightAnswers = 3;

  while (countOfRightAnswers > 0 && defeatCount === false) {
    countOfRightAnswers -= 1;
    const progressionNumbs = 10;
    const progressionArray = [];
    const diff = getRandomNumber(1, 11);
    let startNumb = getRandomNumber(1, 100);
    for (let i = 0; i < progressionNumbs; i += 1) {
      progressionArray.push(startNumb);
      startNumb += diff;
    }
    const indexSecretNumb = getRandomNumber(0, 9);
    const rightAnswer = progressionArray[indexSecretNumb];
    progressionArray[indexSecretNumb] = '..';

    console.log(`Question: ${progressionArray.join(' ')}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    defeatCount = validateAnswer(Number(playerAnswer), rightAnswer);
    resultOnScreen(defeatCount, playerAnswer, rightAnswer);
  }
  winOrLoose(defeatCount, playerName);
};

export default brainProgression;
