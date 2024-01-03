import readlineSync from 'readline-sync';
import gameGreeting from './cli.js';

let rounds = 3;
export default (func) => {
  const [description,,,] = func();
  const playerName = gameGreeting();
  console.log(description);
  while (rounds > 0) {
    rounds -= 1;
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
  if (rounds === 0) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
