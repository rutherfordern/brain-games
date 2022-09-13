import readlineSync from 'readline-sync';

const welcomeQuestion = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default welcomeQuestion;
