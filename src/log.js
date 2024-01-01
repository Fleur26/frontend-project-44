import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen, getData,
} from './game-logic.js';

function log(questionForGame, func) {
  const playerName = gameGreeting(questionForGame);
  let defeatCount = false;
  let countOfRightAnswers = 3;
  while (countOfRightAnswers > 0 && defeatCount === false) {
    countOfRightAnswers -= 1;
    const [question, answer] = getData(func);
    console.log(question);
    const trueAnswer = answer;
    const playerAnswer = takePlayerAnswer('Your answer: ');
    if (typeof (playerAnswer) === typeof (trueAnswer)) {
      defeatCount = validateAnswer(playerAnswer, trueAnswer, playerName);
    } else {
      defeatCount = validateAnswer(Number(playerAnswer), trueAnswer, playerName);
    }

    resultOnScreen(defeatCount, playerAnswer, trueAnswer);
  }
  winOrLoose(defeatCount, playerName);
}

export default log;
