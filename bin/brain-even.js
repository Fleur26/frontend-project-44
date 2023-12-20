import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const playerName = readlineSync.question('May i have your name? ');
console.log(`Hello, ${playerName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const countRightAnswers = 3;

for (let countAnswersPlayer = 0; countAnswersPlayer <= countRightAnswers; countAnswersPlayer += 1) {
  let playerDefeat = 0;
  let randomNumb = Math.random();
  let isEven = randomNumb % 2 === 0;
  console.log(`Question: ${randomNumb}`);
  let playerAnswer = readlineSync.question('Your answer: ');
  switch (playerAnswer) {
    case 'yes':
      if (isEven) {
        console.log('Correct!');
      }
      else {
        console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again ${playerName}!`);
        
      }
      break;
    case 'no':
      if (!isEven) {
        console.log('Correct!');
      }
      else {
        console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again ${playerName}!`);
        countAnswersPlayer = 0;
      }
      break;
    default:
      console.log('Thats not correct answer, please, answer "yes" or "no"');
      countAnswersPlayer = 0;
      break;
  }
}
