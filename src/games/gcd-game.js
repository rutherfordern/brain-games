import gameEngine from '../game-engine/engine.js';
import generateRandomNumber from '../modules/generate-random-number.js';
import gcd from '../modules/gcd-numbers.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

function generateQuestion() {
  const x = generateRandomNumber(1, 100);
  const y = generateRandomNumber(1, 100);

  const result = `${x} ${y}`;
  return result;
}

function gameLogic(numbers, userAnswer) {
  const arrayNumbers = numbers.split(' ');
  const [num1, num2] = arrayNumbers;

  const x = Number(num1);
  const y = Number(num2);

  const resultGcd = gcd(x, y);

  const correctAnswer = 'Correct!';
  const wrongAnswer = `'yes' is wrong answer ;(. Correct answer was ${resultGcd}.`;

  if (resultGcd === Number(userAnswer)) {
    return correctAnswer;
  }
  return wrongAnswer;
}

export default () => gameEngine(gameRule, generateQuestion, gameLogic);
