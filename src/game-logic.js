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

const Gcd = (x, y) => {
  let firstNumb = x;
  let secondNumb = y;
  while (firstNumb > 0 && secondNumb > 0) {
    if (firstNumb > secondNumb) {
      firstNumb %= secondNumb;
    } else {
      secondNumb %= firstNumb;
    }
  }
  let result = 0;
  if (firstNumb === 0) {
    result = secondNumb;
  }
   else {
    result = firstNumb;
   }
  return result;
};

const winOrLoose = (defeatScore) => {
 if (defeatScore === 0 ){

 }
 else{
  
 }
}
export {
  winOrLoose, Gcd, takePlayerAnswer, outputToScreen, validateAnswer, getRandomNumber, gameGreeting,
};
