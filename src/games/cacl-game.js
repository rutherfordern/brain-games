import { generateRandomNumber } from "../modules/generate-random-number.js";
import { gameEngine } from "../game-engine/engine.js";

const gameRule = "What is the result of the expression?";

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

export default () => gameEngine(gameRule, generateQuestion, gameLogic);
