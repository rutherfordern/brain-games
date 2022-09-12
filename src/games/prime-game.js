import readlineSync from "readline-sync";
import { generateRandomNumber } from "../modules/generate-random-number.js";
import { isPrime } from "../modules/check-prime-num.js";

function gameLogic(generateNum, userAnswer) {
  const result = isPrime(generateNum);

  const correctAnswer = "Correct!";
  const wrongAnswer = "'yes' is wrong answer ;(. Correct answer was 'no'.";

  if (result) {
    return userAnswer === "yes" ? correctAnswer : wrongAnswer;
  }
  return userAnswer === "no" ? correctAnswer : wrongAnswer;
}

export function primeGame() {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, dear ${name}!`);

  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

  let counter = 0;
  let result = "";

  do {
    const question = generateRandomNumber(2, 20);
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question("Your answer: ");

    result = gameLogic(question, userAnswer);
    console.log(result);

    counter += 1;
  } while (counter < 3 && result === "Correct!");

  return result === "Correct!" ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
}
