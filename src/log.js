import readlineSync from 'readline-sync';
import gameGreeting from './cli.js';

let countAnswersPlayer = 3;
export default (func) => {
  const [description,,,] = func();
  const playerName = gameGreeting();
  console.log(description);
  while (countAnswersPlayer > 0) {
    countAnswersPlayer -= 1;
    const [, question, answer] = func();
    console.log(question);
    const correctAnswer = answer;
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
  if (countAnswersPlayer === 0) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
