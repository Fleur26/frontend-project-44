import readlineSync from 'readline-sync';

export const takePlayerAnswer = (question) => {
  const playerAnswer = readlineSync.question(question);
  return playerAnswer;
};

export const validateAnswer = (playerAnswer, trueAnswer) => {
  let isDefeat = false;
  if (playerAnswer === trueAnswer) {
    return isDefeat;
  }
  isDefeat = true;
  return isDefeat;
};
export const resultOnScreen = (isDefeat, playerAnswer, trueAnswer) => {
  if (isDefeat) {
    console.log(`"${playerAnswer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
  } else {
    console.log('Correct!');
  }
};
export const gameGreeting = (questionForGame) => {
  console.log('Welcome to the Brain Games!');

  const playerName = takePlayerAnswer('May I have your name? ');
  console.log(`Hello, ${playerName}!\n${questionForGame}`);
  return playerName;
};
export const winOrLoose = (defeatScore, playerName) => {
  if (defeatScore === false) {
    console.log(`Congratulations, ${playerName}!`);
  } else {
    console.log(`Let's try again, ${playerName}!`);
  }
};

export const getData = (func) => {
  const arrayData = func();
  return arrayData;
};

export const translateAnswer = (rightAnswer) => {
  if (rightAnswer) {
    return 'yes';
  } else {
    return 'no';
  }
};