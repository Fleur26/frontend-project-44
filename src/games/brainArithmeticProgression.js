import { getRandomNumber } from '../arithmetic-logic.js';
import log from '../log.js';

const brainProgression = () => {
    const progressionNumbs = 10;
    const progressionArray = [];
    const diff = getRandomNumber(1, 11);
    let startNumb = getRandomNumber(1, 100);
    for (let j = 0; j < progressionNumbs; j += 1) {
      progressionArray.push(startNumb);
      startNumb += diff;
    }
    const indexSecretNumb = getRandomNumber(0, 9);
    const rightAnswer = progressionArray[indexSecretNumb];
    progressionArray[indexSecretNumb] = '..';

    const question = (`Question: ${progressionArray.join(' ')}`);
    const array = [question, rightAnswer];
    return array;
};
log('What number is missing in the progression?', brainProgression);
export default brainProgression;
