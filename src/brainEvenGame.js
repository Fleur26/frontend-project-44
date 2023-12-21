import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const countRightAnswers = 3;
  const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

  let countAnswersPlayer = 0;
  let playerDefeat = 0;
  while (countAnswersPlayer < countRightAnswers && playerDefeat !== 1) {
    countAnswersPlayer += 1;
    const randomNumb = getRandomNumber(1, 100);
    const isEven = randomNumb % 2 === 0;
    console.log(`Question: ${randomNumb}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    switch (playerAnswer) {
      case 'yes':
        if (isEven) {
          console.log('Correct!');
        } else {
          console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again ${playerName}!`);
          playerDefeat += 1;
        }
        break;
      case 'no':
        if (!isEven) {
          console.log('Correct!');
        } else {
          console.log(`"no" is wrong answer ;(. Correct answer was "yes".\nLet's try again ${playerName}!`);
          playerDefeat += 1;
        }
        break;
      default:
        console.log(`Thats not correct answer, please, answer "yes" or "no". \nLet's try again ${playerName}!`);
        playerDefeat += 1;
        break;
    }
  }

  if (playerDefeat === 0) {
    console.log(`Congratulations, ${playerName}!`);
  }
};
export default evenGame;
