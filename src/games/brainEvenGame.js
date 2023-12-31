import { getRandomNumber } from '../arithmetic-logic.js';
import log from '../log.js';

const evenGame = () => {
  const array = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNumb = getRandomNumber(1, 100);
    let isEven = randomNumb % 2 === 0;
    if (isEven) {
      isEven = 'yes';
    } else {
      isEven = 'no';
    }
    const question = (`Question: ${randomNumb}`);
    const trueAnswer = isEven;
    array.push([question, trueAnswer]);
  }

  log('Answer "yes" if the number is even, otherwise answer "no".', array);
};
export default evenGame;
