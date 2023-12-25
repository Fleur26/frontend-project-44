import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer,
} from '../src/game-logic.js';
import { getRandomNumber } from '../src/arithmetic-logic.js';

const brainProgression = () => {
  const playerName = gameGreeting('What number is missing in the progression?');
  let defeatCount = 0;
  let countOfRightAnswers = 3;

  while (countOfRightAnswers > 0 && defeatCount === 0) {
    countOfRightAnswers -= 1;
    const progressionNumbs = 10;
    const progressionArray = [];
    const diff = getRandomNumber(1, 11);
    let startNumb = getRandomNumber(1, 100);
    for (let i = 0; i < progressionNumbs; i += 1) {
      progressionArray.push(startNumb);
      startNumb += diff;
    }
    const indexSecretNumb = getRandomNumber(1, 11);
    const rightAnswer = progressionArray[indexSecretNumb];
    progressionArray[indexSecretNumb] = '..';

    console.log(`Question: ${progressionArray.join(' ')}`);
    const playerAnswer = takePlayerAnswer('Your answer: ');
    defeatCount = validateAnswer(Number(playerAnswer), rightAnswer);
  }
  winOrLoose(defeatCount, playerName);
};

export default brainProgression;