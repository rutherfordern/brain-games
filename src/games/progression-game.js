import readlineSync from "readline-sync";
import { generateRandomNumber } from "../modules/generate-random-number.js";
import { generateRandomOneNum } from "../modules/generate-random-one-num.js";

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
  sortProgression[positionHidden] = "..";

  const result = sortProgression.join(" ");
  return result;
}

function gameLogic(progression, userAnswer) {
  const correctAnswer = "Correct!";
  const wrongAnswer = `'yes' is wrong answer ;(. Correct answer was ${hiddenNum}.`;

  if (hiddenNum === Number(userAnswer)) {
    return correctAnswer;
  }
  return wrongAnswer;
}

export function progressionGame() {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, dear ${name}!`);

  console.log("What number is missing in the progression?");

  let counter = 0;
  let result = "";

  do {
    const question = generateQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");

    result = gameLogic(question, userAnswer);
    console.log(result);

    counter += 1;
  } while (counter < 3 && result === "Correct!");

  return result === "Correct!" ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
}
