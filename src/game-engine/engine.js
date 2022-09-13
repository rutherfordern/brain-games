import readlineSync from 'readline-sync';

export default function gameEngine(gameRule, gameQuestion, gameLogic) {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameRule);

  let counter = 0;
  let result = '';

  do {
    const question = gameQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    result = gameLogic(question, userAnswer);
    console.log(result);

    counter += 1;
  } while (counter < 3 && result === 'Correct!');

  return result === 'Correct!' ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`);
}
