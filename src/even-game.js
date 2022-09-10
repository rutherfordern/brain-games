// /* eslint-disable */
import readlineSync from "readline-sync";

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameLogic(num, userAnswer) {
  const correctAnswer = "Correct!";
  const wrongAnswer = "'yes' is wrong answer ;(. Correct answer was 'no'.";

  if (num % 2 === 0) {
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
    const numQuestion = generateRandomNumber(1, 100);
    console.log(`Question: ${numQuestion}`);

    const numAnswer = readlineSync.question("Your answer: ");

    result = gameLogic(numQuestion, numAnswer);
    console.log(result);

    counter += 1;
  } while (counter < 3 && result === "Correct!");

  return result === "Correct!" ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
}
