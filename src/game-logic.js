import readlineSync from 'readline-sync';

const takePlayerAnswer = (question) => {
  const playerAnswer = readlineSync.question(question);
  return playerAnswer;
};

const outputToScreen = (text) => { // delete //
  console.log(text);
};

const validateAnswer = (playerAnswer, trueAnswer) => {
  // split the loss check and the response validation ? //
  let countDefeat = 0;
  if (Number.isNaN(playerAnswer)) {
    outputToScreen('Incorrect response format');
    countDefeat += 1;
    return countDefeat;
  }
  if (playerAnswer === trueAnswer) {
    outputToScreen('Correct!');
    return countDefeat;
  }
  outputToScreen(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
  countDefeat += 1;
  return countDefeat;
};
const gameGreeting = (questionForGame) => { // change logic //
  outputToScreen('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May I have your name? ');
  outputToScreen(`Hello, ${playerName}!\n${questionForGame}`);
  return playerName;
};
const winOrLoose = (defeatScore, playerName) => {
  if (defeatScore === 0) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};
export {
  winOrLoose, takePlayerAnswer, outputToScreen, validateAnswer, gameGreeting,
};
