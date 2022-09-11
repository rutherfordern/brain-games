import readlineSync from "readline-sync";
import { generateRandomNumber } from "../modules/generate-random-number.js";
import { gcd } from "../modules/gcd-numbers.js";

function generateQuestion() {
  const x = generateRandomNumber(1, 100);
  const y = generateRandomNumber(1, 100);

  const result = `${x} ${y}`;
  return result;
}

function gameLogic(numbers, userAnswer) {
  const arrayNumbers = numbers.split(" ");
  const [num1, num2] = arrayNumbers;

  const x = Number(num1);
  const y = Number(num2);

  const resultGcd = gcd(x, y);

  const correctAnswer = "Correct!";
  const wrongAnswer = "'yes' is wrong answer ;(. Correct answer was 'no'.";

  if (resultGcd === Number(userAnswer)) {
    return correctAnswer;
  }
  return wrongAnswer;
}

export function gcdGame() {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, dear ${name}!`);

  console.log("Find the greatest common divisor of given numbers.");

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
