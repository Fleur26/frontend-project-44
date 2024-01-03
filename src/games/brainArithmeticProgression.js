import { getRandomNumber } from '../arithmetic-logic.js';
import engine from '../engine.js';

const description = 'What number is missing in the progression?';
const brainProgression = () => {
  const progressionLength = 10;
  const progressionArray = [];
  const diff = getRandomNumber(1, 11);
  let startNumb = getRandomNumber(1, 100);
  for (let j = 0; j < progressionLength; j += 1) {
    progressionArray.push(startNumb);
    startNumb += diff;
  }
  const indexSecretNumb = getRandomNumber(0, 9);
  const correctAnswer = progressionArray[indexSecretNumb];
  progressionArray[indexSecretNumb] = '..';

  const question = (`Question: ${progressionArray.join(' ')}`);
  const array = [description, question, String(correctAnswer)];
  return array;
};

export default engine(brainProgression);
