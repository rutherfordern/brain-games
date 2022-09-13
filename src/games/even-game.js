import generateRandomNumber from '../modules/generate-random-number.js';
import gameEngine from '../game-engine/engine.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateQuestion() {
  const digit = generateRandomNumber(1, 100);
  return digit;
}

function gameLogic(generateNum, userAnswer) {
  const correctAnswer = 'Correct!';
  const wrongAnswer = '"yes" is wrong answer ;(. Correct answer was "no".';

  if (generateNum % 2 === 0) {
    return userAnswer === 'yes' ? correctAnswer : wrongAnswer;
  }
  return userAnswer === 'no' ? correctAnswer : wrongAnswer;
}

export default () => gameEngine(gameRule, generateQuestion, gameLogic);
