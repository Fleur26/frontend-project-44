import {
  winOrLoose, gameGreeting, takePlayerAnswer, validateAnswer, resultOnScreen,
} from './game-logic.js';

 const log = (questionForGame, rightAnswer, question) => {
    const playerName = gameGreeting(questionForGame);
    let defeatCount = false;
    let countOfRightAnswers = 3;
    while (countOfRightAnswers > 0 && defeatCount === false) {
      countOfRightAnswers -= 1;
      console.log(question);
      let trueAnswer = rightAnswer;
      const playerAnswer = takePlayerAnswer('Your answer: ');
      defeatCount = validateAnswer(Number(playerAnswer), trueAnswer, playerName);
      resultOnScreen(defeatCount, playerAnswer, trueAnswer);
    } 
     winOrLoose(defeatCount, playerName);
  }

  export default log;