import readlineSync from 'readline-sync';
import gameGreeting from './cli.js';

export default (descriptionGame, func) => {
  const description = descriptionGame;
  const playerName = gameGreeting();
  console.log(description);
  for (let rounds = 3; rounds > 0; rounds -= 1) {
    const [question, correctAnswer] = func();
    console.log(question);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (playerAnswer !== correctAnswer) {
      console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};
