import readlineSync from 'readline-sync';

export const takePlayerAnswer = (question) => {
  const playerAnswer = readlineSync.question(question);
  return playerAnswer;
};

export const validateAnswer = (playerAnswer, trueAnswer) => {
  // split the loss check and the response validation ? //
  let countDefeat = 0;
  if (Number.isNaN(playerAnswer)) {
    console.log('Incorrect response format');
    countDefeat += 1;
    return countDefeat;
  }
  if (playerAnswer === trueAnswer) {
    console.log('Correct!');
    return countDefeat;
  }
  console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
  countDefeat += 1;
  return countDefeat;
};
export const gameGreeting = (questionForGame) => { // change logic //
  console.log('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May I have your name? ');
  console.log(`Hello, ${playerName}!\n${questionForGame}`);
  return playerName;
};
export const winOrLoose = (defeatScore, playerName) => {
  if (defeatScore === 0) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
