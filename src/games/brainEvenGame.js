import { getRandomNumber } from '../arithmetic-logic.js';
import engine from '../log.js';

const evenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const randomNumb = getRandomNumber(1, 100);
  let isEven = randomNumb % 2 === 0;
  if (isEven) {
    isEven = 'yes';
  } else {
    isEven = 'no';
  }
  const question = (`Question: ${randomNumb}`);
  const correctAnswer = isEven;
  const array = [description, question, String(correctAnswer)];
  return array;
};
engine(evenGame);
export default evenGame;
