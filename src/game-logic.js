import readlineSync from 'readline-sync';

const takePlayerAnswer = (question) => {
  const playerAnswer = readlineSync.question(question);
  return playerAnswer;
};

const outputToScreen = (text) => {
  console.log(text);
};

const validateAnswer = (playerAnswer, trueAnswer, playerName = 'player') => {
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
  outputToScreen(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again ${playerName}!`);
  countDefeat += 1;
  return countDefeat;
};
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);
const gameGreeting = (questionForGame) => {
  outputToScreen('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May i have your name? ');
  outputToScreen(`Hello, ${playerName}!\n${questionForGame}`);
  return playerName;
};

export {
  takePlayerAnswer, outputToScreen, validateAnswer, getRandomNumber, gameGreeting,
};
