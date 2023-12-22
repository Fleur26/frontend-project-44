import readlineSync from 'readline-sync';

const takePlayerAnswer = (question) => {
  const playerAnswer = readlineSync.question(question);
  return playerAnswer;
};

const outputToScreen = (text) => {
  console.log(text);
};

const validateAnswer = (playerAnswer, trueAnswer, playerName = 'player') => {
  if (playerAnswer === trueAnswer) {
    outputToScreen('Correct!');
  } else {
    outputToScreen(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".\nLet's try again ${playerName}!`);
  }
};
const getRandomNumber = (min, max) => {
  Math.floor(Math.random() * (max - min) + min);
};

export {
  takePlayerAnswer, outputToScreen, validateAnswer, getRandomNumber,
};
