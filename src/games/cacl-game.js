import readlineSync from "readline-sync";
import { generateRandomNumber } from "../modules/generate-random-number.js";

function generateQuestion() {
  const x = generateRandomNumber(1, 100);
  const y = generateRandomNumber(1, 100);

  const operators = ["+", "-", "*"];
  const operation = operators[Math.floor(Math.random() * operators.length)];

  const result = `${x} ${operation} ${y}`;
  return result;
}

function gameLogic(expression, userAnswer) {
  const expressionArray = expression.split(" ");
  const [num1, operator, num2] = expressionArray;

  let result = 0;

  switch (operator) {
    case "+":
      result = Number(num1) + Number(num2);
      break;
    case "-":
      result = Number(num1) - Number(num2);
      break;
    case "*":
      result = Number(num1) * Number(num2);
      break;
    default:
      result = "Неверный оператор";
  }

  const correctAnswer = "Correct!";
  const wrongAnswer = `'yes' is wrong answer ;(. Correct answer was ${result}.`;

  if (result === Number(userAnswer)) {
    return correctAnswer;
  }
  return wrongAnswer;
}

export function calcGame() {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, dear ${name}!`);
  console.log("What is the result of the expression?");

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
