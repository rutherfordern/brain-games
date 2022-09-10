import readlineSync from "readline-sync";
import { generateRandomNumber } from "../modules/generate-random-number.js";

function gameLogic(generateNum, userAnswer) {
  const correctAnswer = "Correct!";
  const wrongAnswer = "'yes' is wrong answer ;(. Correct answer was 'no'.";

  if (generateNum % 2 === 0) {
    return userAnswer === "yes" ? correctAnswer : wrongAnswer;
  }
  return userAnswer === "no" ? correctAnswer : wrongAnswer;
}

export function evenGame() {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, dear ${name}!`);

  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");

  let counter = 0;
  let result = "";

  do {
    const generateQuestion = generateRandomNumber(1, 100);
    console.log(`Question: ${generateQuestion}`);

    const userAnswer = readlineSync.question("Your answer: ");

    result = gameLogic(generateQuestion, userAnswer);
    console.log(result);

    counter += 1;
  } while (counter < 3 && result === "Correct!");

  return result === "Correct!" ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
}
