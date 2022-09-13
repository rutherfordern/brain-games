import gameEngine from '../game-engine/engine.js';
import generateRandomNumber from '../modules/generate-random-number.js';
import generateRandomOneNum from '../modules/generate-random-one-num.js';

const gameRule = 'What number is missing in the progression?';
let hiddenNum = null;

function generateQuestion() {
  const arrayLength = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 10);
  let digit = generateRandomOneNum(50);

  const progression = [];
  for (let i = 0; i < arrayLength; i += 1) {
    digit += step;
    progression.push(digit);
  }

  const sortProgression = progression.sort((a, b) => a - b);

  const positionHidden = generateRandomOneNum(arrayLength);
  hiddenNum = sortProgression[positionHidden];
  sortProgression[positionHidden] = '..';

  const result = sortProgression.join(' ');
  return result;
}

function gameLogic(progression, userAnswer) {
  const correctAnswer = 'Correct!';
  const wrongAnswer = `'yes' is wrong answer ;(. Correct answer was ${hiddenNum}.`;

  if (hiddenNum === Number(userAnswer)) {
    return correctAnswer;
  }
  return wrongAnswer;
}

export default () => gameEngine(gameRule, generateQuestion, gameLogic);
