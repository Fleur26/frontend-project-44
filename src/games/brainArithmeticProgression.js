import { getRandomNumber, progression } from '../arithmetic-logic.js';
import engine from '../engine.js';

const description = 'What number is missing in the progression?';
const brainProgression = () => {
  const progressionLength = 10;
  const diff = getRandomNumber(1, 11);
  const startNumb = getRandomNumber(1, 100);
  const progressionArray = progression(startNumb, diff, progressionLength);
  const indexSecretNumb = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = progressionArray[indexSecretNumb];
  progressionArray[indexSecretNumb] = '..';

  const question = (`Question: ${progressionArray.join(' ')}`);
  const array = [question, String(correctAnswer)];
  return array;
};

export default engine(description, brainProgression);
