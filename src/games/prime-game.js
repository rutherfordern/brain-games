import gameEngine from '../game-engine/engine.js';
import generateRandomNumber from '../modules/generate-random-number.js';
import isPrime from '../modules/check-prime-num.js';

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateQuestion() {
  const digit = generateRandomNumber(2, 20);
  return digit;
}

function gameLogic(generateNum, userAnswer) {
  const result = isPrime(generateNum);

  const correctAnswer = 'Correct!';
  const wrongAnswer = '"yes" is wrong answer ;(. Correct answer was "no".';

  if (result) {
    return userAnswer === 'yes' ? correctAnswer : wrongAnswer;
  }
  return userAnswer === 'no' ? correctAnswer : wrongAnswer;
}

export default () => gameEngine(gameRule, generateQuestion, gameLogic);
