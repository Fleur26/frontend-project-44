import readlineSync from 'readline-sync';
import gameGreeting from './cli.js';

export default (func) => {
  const [description,,,] = func();
  const playerName = gameGreeting();
  console.log(description);
  for (let rounds = 3; rounds > 0; rounds -= 1) {
    const [, question, correctAnswer] = func();
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
  console.log(`Congratulations, ${playerName}!`);
};
