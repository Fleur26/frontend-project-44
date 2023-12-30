import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen,
} from './game-logic.js';

 const log = (question, func) => {
    const playerName = gameGreeting(question);
    let defeatCount = false;
    let countOfRightAnswers = 3;
    while (countOfRightAnswers > 0 && defeatCount === 0) {
      countOfRightAnswers -= 1;
      let trueAnswer = func();
      const playerAnswer = takePlayerAnswer('Your answer: ');
      defeatCount = validateAnswer(Number(playerAnswer), trueAnswer, playerName);
      resultOnScreen(defeatCount, playerAnswer, trueAnswer);
    } 
    winOrLoose(defeatCount, playerName);
  }

  export default log;